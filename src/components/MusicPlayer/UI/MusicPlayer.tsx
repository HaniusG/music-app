import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styles from "./MusicPlayer.module.scss";
import { changeSong, setPlaying } from "../../../redux/songs/songsSlice";
import { FaPause, FaPlay } from "react-icons/fa";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { PiSpeakerSimpleHighFill, PiSpeakerSimpleXFill } from "react-icons/pi";

const MusicPlayer: React.FC = () => {
  const dispatch = useDispatch();

  //states from redux
  const chosenSong = useSelector((state: RootState) => state.songs.chosenSong);
  const songs = useSelector((state: RootState) => state.songs.songs);
  const isPlaying = useSelector((state: RootState) => state.songs.isPlaying);

  //local states
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);
  const [muted, setMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  //reset time and duration on song change:
  useEffect(() => {
    setCurrentTime(0);
    setDuration(audioRef.current ? audioRef.current.duration : 0);
  }, [chosenSong]);
  //effect to play/pause audio:
  useEffect(() => {
    if (audioRef.current) {
      if (audioRef.current.paused || isPlaying) {
        audioRef.current.play();
        dispatch(setPlaying(true));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, chosenSong]);


  //event handlers
  
  //duration
  const durationChangeHandler = (e: React.SyntheticEvent<HTMLAudioElement>): void => {
    setDuration(e.currentTarget.duration);
  };

  //play & pause 
  const playPauseHandler = (): void => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        dispatch(setPlaying(true));
      } else {
        dispatch(setPlaying(false));
      }
    }
  };

  //next song
  const nextSongHandler = (): void => {
    const index = songs.findIndex((song) => song.id === chosenSong?.id);
    dispatch(setPlaying(true));
    if (index !== songs.length - 1) {
      dispatch(changeSong(songs[index + 1]));
    } else {
      dispatch(changeSong(songs[0]));
    }
  };

  //previous song
  const prevSongHandler = (): void => {
    const index = songs.findIndex((song) => song.id === chosenSong?.id);
    dispatch(setPlaying(true));
    if (index !== 0) {
      dispatch(changeSong(songs[index - 1]));
    } else {
      dispatch(changeSong(songs[songs.length - 1]));
    }
  };

  //timeUpdate
  const timeUpdateHandler = (e: React.SyntheticEvent<HTMLAudioElement>): void => {
    setCurrentTime(e.currentTarget.currentTime);
  };

  //control of the bar
  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setCurrentTime(Number(e.target.value));
    }
  };

  //volume
  const volumeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newVolume = Number(e.target.value);
    audioRef.current?.volume && (audioRef.current.volume = newVolume);
    
    setVolume(newVolume);
  };

  //mute volume
  const muteHaldler = () => {
    if(muted === false){
      setMuted(true)
      audioRef.current?.volume && (audioRef.current.volume = 0.0001);
      setVolume(0.0001)
    }else{
      setMuted(false)
      audioRef.current?.volume && (audioRef.current.volume = 0.5);
      setVolume(0.5)
    }
  }
  
  //render
  return (
    <div className={styles.audioPlayer}>
      {chosenSong && (
        <>
          <audio
            onTimeUpdate={timeUpdateHandler}
            onDurationChange={durationChangeHandler}
            ref={audioRef}
            autoPlay
            src={chosenSong.source}
            onError={() => console.error("Error loading audio")}
          ></audio>

          <div className={styles.controls}>
            <button onClick={prevSongHandler} disabled={!chosenSong}>
              <TbPlayerTrackPrevFilled />
            </button>
            <button onClick={playPauseHandler} disabled={!chosenSong}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={nextSongHandler} disabled={!chosenSong}>
              <TbPlayerTrackNextFilled />
            </button>
          </div>
          <div className={styles.playbar}>
            <input
              type="range"
              value={currentTime}
              max={duration}
              onChange={dragHandler}
            />
          </div>
          <div className={styles.volumeControl}>
            <label htmlFor="volume" onClick={muteHaldler}>{volume>0.0001 ? <PiSpeakerSimpleHighFill/>:<PiSpeakerSimpleXFill />}</label>
            <input
              id="volume"
              type="range"
              min="0.00001"
              max="1"
              step="0.01"
              value={volume}
              onChange={volumeChangeHandler}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MusicPlayer;
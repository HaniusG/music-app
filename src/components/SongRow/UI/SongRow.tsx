import React, { useState, useEffect } from "react";
import styles from "./SongRow.module.scss";
import { SongProps, setLike } from "../../../redux/songs/songsSlice"; 
import { FaPause, FaPlay, FaHeart, FaCheck, FaShare, FaCaretDown } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { changeSong, setPlaying } from "../../../redux/songs/songsSlice";


//interface for props as they come with a key song
interface SongRowProps {
  song: SongProps;
}

const SongRow: React.FC<SongRowProps> = ({ song }) => {

  const dispatch = useDispatch();

  //redux states
  const chosenSong = useSelector((state: RootState) => state.songs.chosenSong);
  const isPlaying = useSelector((state: RootState) => state.songs.isPlaying);

  //song selection handler
  const chooseSong = () => {
    dispatch(setPlaying(!isPlaying));
    dispatch(changeSong(song));
  };

  const isSelected:boolean = song.id===chosenSong?.id; 

  //render
  return (
    <li className={styles.song + (isSelected ? ` ${styles.songSelected}` : "")}>
      <div className={styles.songName}>
        <div className={styles.buttonDiv}>
          <button><TbGridDots /></button>
          <button onClick={chooseSong} className={styles.playStopBtn}>
            {chosenSong && chosenSong.id === song.id && isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
        <span className={styles.songNameX}>{song.songName}</span>
      </div>

      <div className={styles.artistName}>
        <span>{song.artistName}</span>
      </div>

      <div className={styles.trackNumber}>
        <span>{song.trackNumber}</span>
        <div className={styles.buttons}>
          <button onClick={()=>{dispatch(setLike(song.id))}} style={song.liked ? {color: "rgb(37, 141, 201)"}:{}}><FaHeart /></button>
          <button ><FaCheck /></button>
          <button><FaShare /></button>
          <button><FaCaretDown /></button>
        </div>
      </div>
    </li>
  );
};

export default SongRow;
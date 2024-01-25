import React from 'react'
import SongRow from '../../SongRow';
import styles from './SongList.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';



const SongList:React.FC = () => {
  //states from redux

  //when not searching
  const songs = useSelector((state: RootState) => {
    return state.songs.songs;
  });

  //when searhing
  const filteredSongs =  useSelector((state: RootState) => {
    return state.songs.filteredSongs;
  });

  //isSearching
  const isFiltered = useSelector((state: RootState) => {
    return state.songs.isFiltered;
  });

  //what should we show
  const songs1 = isFiltered ? filteredSongs: songs;
  
  return (
    <div className={styles.songList}>
      <ul>
        <li className={styles.songHeader}>
          <strong className={styles.songName}><p>Song Name</p></strong>
          <strong className={styles.artistName}>Artist Name</strong>
          <strong className={styles.trackNumber}> Tracks</strong>
        </li>
        {songs1.map((song) => (
          <SongRow key={song.id} song={song}/>
        ))}
      </ul>
    </div>
  )
}

export default SongList
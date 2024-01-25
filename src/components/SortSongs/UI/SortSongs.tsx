import React from 'react'
import styles from './SortSongs.module.scss';
import { PiArrowsDownUpBold } from "react-icons/pi"
import { FaCaretDown } from 'react-icons/fa';

const SortSongs = () => {
  return (
    <div className={styles.sortSongs} onClick={()=>console.log("Sort songs")}>
      <button className={styles.sortSongsBtn}><span><span><PiArrowsDownUpBold/></span></span> Sort by</button>
      <button className={styles.dropDown}><FaCaretDown /></button>
    </div>
  )
}

export default SortSongs
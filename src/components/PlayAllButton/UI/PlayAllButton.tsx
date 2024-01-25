import React from 'react'
import styles from './PlayAllButton.module.scss'
import { FaPlay, FaCaretDown } from 'react-icons/fa'
const PlayAllButton = () => {
  return (
    <div className={styles.playAll} onClick={()=>console.log("Play All")}>
      <button className={styles.playAllbtn}><span><FaPlay/></span> Play All</button>
      <button className={styles.dropDown}><FaCaretDown /></button>
  </div>
  )
}

export default PlayAllButton
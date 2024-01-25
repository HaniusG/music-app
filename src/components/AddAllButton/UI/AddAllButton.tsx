import React from 'react'
import styles from './AddAllButton.module.scss'
import { FaPlus, FaCaretDown } from 'react-icons/fa'

const AddAllButton = () => {  
  return (
    <div className={styles.addAll} onClick={()=>console.log("Add all")}>
      <button className={styles.addAllbtn}><span><FaPlus/></span> Add All</button>
      <button className={styles.dropDown}><FaCaretDown /></button>
    </div>
  )
}

export default AddAllButton;
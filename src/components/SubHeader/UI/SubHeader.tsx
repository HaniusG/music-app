import React from "react";
import styles from "./SubHeader.module.scss";
import { FaPlay, FaHeart, FaCheck, FaShare, FaCaretDown } from "react-icons/fa";
import PlayAllButton from "../../PlayAllButton";
import AddAllButton from "../../AddAllButton";
import SortSongs from "../../SortSongs";
import Search from "../../Search/UI/Search";

//render
const SubHeader = () => {
  return (
    <div className={styles.musicControl}>

      <div className={styles.controlButtons}>
        <PlayAllButton/>
        <AddAllButton/>
      </div>

      <div  className={styles.searchSortButtons}>
        <SortSongs/>
        <Search/>
      </div>

    </div>
  );
};

export default SubHeader;

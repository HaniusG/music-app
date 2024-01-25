import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss";
import { searchSongs, setIsFiltered } from "../../../redux/songs/songsSlice";
import { useDispatch } from "react-redux";


const Search = () => {
  const dispatch = useDispatch();

  //when searching it event target.value is going to the slice as a payload
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSongs(event.target.value));
    if (event.target.value) {
      dispatch(setIsFiltered(true));
    } else {
      dispatch(setIsFiltered(false));
    }
  };
//render
  return (
    <div className={styles.searchDiv}>
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
      <input
        type="text"
        placeholder="Filter"
        className={styles.searchInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

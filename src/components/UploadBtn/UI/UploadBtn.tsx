import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickChange } from "../../../redux/upload/uploadSlice";
import styles from "./UploadBtn.module.scss";
import { RootState } from "../../../redux/store";

const UploadBtn = () => {
  const dispatch = useDispatch();

  const isClicked = useSelector((state: RootState) => {
    return state.upload.isClicked;
  });

  return (
    <>
      {
        //if clicked dont need to show that btn
        !isClicked ? (
          <div className={styles.btnDiv}>
            <button
              className={styles.uploadBtn}
              onClick={() => dispatch(clickChange(true))}
            >
              Upload your music
            </button>
          </div>
        ) : null
      }
    </>
  );
};

export default UploadBtn;

import React, { ChangeEvent, useState } from 'react';
import {Audio}  from 'react-loader-spinner';

import styles from './MusicUplader.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../../../redux/songs/songsSlice';
import { RootState } from '../../../redux/store';
import { clickChange } from '../../../redux/upload/uploadSlice';

const MusicUploader: React.FC = () => {
  const dispatch = useDispatch();



  //local states
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  //file input handlers
  
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFileType = files[0].type.split('/')[0];
      if (selectedFileType === 'audio') {
        setSelectedFile(files[0]);
      } else {
        alert('Please select a valid audio file.');
        event.target.value = '';
      }
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setUploading(true);

      // Simulate an asynchronous upload process
      setTimeout(async () => {
        console.log(selectedFile);
        await dispatch(addSong(selectedFile));
        await dispatch(clickChange(false))
        setUploading(false);
      }, 3000); // 3 seconds delay
      
      
    }
  };

  return (
    <div className={styles.musicUploader}>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className={styles.fileInput}
      />
      
      <button onClick={handleUpload} className={styles.uploadButton}>
        {uploading ? (
          <Audio 
           height="80"
          width="80"
          color="black"
          ariaLabel="loading"
           
           />
        ) : (
          'Upload Music'
        )}
      </button>
    </div>
  );
};

export default MusicUploader;

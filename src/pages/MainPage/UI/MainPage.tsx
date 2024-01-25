import React from 'react'
import SongList from '../../../components/SongList';
import SubHeader from '../../../components/SubHeader';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import MusicPlayer from '../../../components/MusicPlayer';
import Modal from '../../../components/Modal';
import MusicUploader from '../../../components/MusicUpload';
import UploadBtn from '../../../components/UploadBtn';
import styles from './MainPage.module.scss'

function MainPage() {
  const isClicked = useSelector((state: RootState)=>{
    return state.upload.isClicked
  })
  return (
    <div>
      <SubHeader/>
      <SongList/>      
      <MusicPlayer/>
      {
        isClicked ? <Modal><MusicUploader/></Modal>: null
      }
     {
      isClicked ? <div className={styles.overlay}></div>:null
     }
     <UploadBtn/>
    </div>
  );
}

export default MainPage;
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './Modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { clickChange } from '../../../redux/upload/uploadSlice'

interface ModalProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {

  //redux state
  const isClicked = useSelector((state: RootState)=>{
    return state.upload.isClicked
  })
  
  const dispatch = useDispatch();

  //ref for modal
  const modalRef = useRef<HTMLDivElement>(null)

  //it closes the modal when unclicking
  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node) ) {
      dispatch(clickChange(false))
    }
  }

  //click on the screen it goes
  useEffect(() => {
    if(isClicked){
      document.addEventListener('mousedown', closeModal);

    }else{
      document.removeEventListener('mousedown', closeModal);
    
    }
    

    return () => {
      document.removeEventListener('mousedown', closeModal);

    }
  }, [isClicked])

  
//render with children
  return (
    <>
      {
        isClicked && <div>
            <div ref={modalRef} className={styles.modal}>{children}</div>
          </div>
      }
    </>
  )
}

export default Modal
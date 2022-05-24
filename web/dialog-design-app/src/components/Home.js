import React, { useState } from 'react';
import { AlertDialog } from './dialogs/AlertDialog';
import { SuccesDialog } from './dialogs/SuccesDialog';
import { ErrorDialog } from './dialogs/ErrorDialog';
import { DeleteMessage } from './messages/DeleteMessage';
import './../styles/home.scss';
import './../styles/dialog.scss';



export const Home = () => {

  
   const [modalSelected, setmodalSelected] = useState(0);
    const changeModal = (modal) =>{
    setmodalSelected(modal)
    }

    const [message, setmessage] = useState(1)
    const changeMessage = (modal) =>{
        setmessage(modal)

        if(<AlertDialog/>){
          setmodalSelected(0);
        }
      }
  return (
    <>
    <h1 className='title'>Select an option to display a dialog</h1>

    <div className='buttons-cont'>
        <div className='btn alert' onClick={() => changeModal(1)} >Alert</div>
        <div className='btn succes' onClick={() => changeModal(2)}>Succes</div>
        <div className='btn error' onClick={() => changeModal(3)}>Error</div>
    </div>
    
    
    <div className={message === 1 ? 'message-cont delete show' : 'hidden'}>
    <DeleteMessage changeMessage={changeMessage}/>
    </div>

    <div className={modalSelected === 1 ? 'dialog-cont show' : 'hidden'}>
      <AlertDialog changeModal={changeModal} changeMessage={changeMessage}/>
    </div>

    <div className={modalSelected === 2 ? 'dialog-cont show' : 'hidden'}>
      <SuccesDialog changeModal={changeModal}/>
    </div>

    <div className={modalSelected === 3 ? 'dialog-cont show' : 'hidden'}>
    <ErrorDialog changeModal={changeModal}/>
    </div>
  

    </>
  )
}

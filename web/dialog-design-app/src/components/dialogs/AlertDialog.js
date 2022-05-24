import React from 'react';

export const AlertDialog = ({changeModal, changeMessage}) => {



  return (
    <>
        <section className='dialog'>
            <div className='dialog-close' onClick={()=>changeModal(0)}>&#10006;</div>
           
            <div className='dialog-content'>
            <h1 className='dialog-icon alert'>!</h1>
            <h1 className='dialog-title'>¡Cuidado!</h1>
            <h6 className='dialog-subtitle'>No podrás volver atrás</h6>
            <div className='dialog-btn-cont'>
                <btn className='action-btn' onClick={()=>changeMessage(1)}>Borrar</btn>
                <btn className='cancel-btn' onClick={()=>changeModal(0)}>Cancelar</btn>
            </div>
            
            </div>

        </section>
    </>
  )
}

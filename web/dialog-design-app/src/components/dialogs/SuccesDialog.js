import React from 'react'

export const SuccesDialog = ({changeModal}) => {

    return (
      <>
          <section className='dialog'>
              <div className='dialog-close' onClick={()=>changeModal(0)}>&#10006;</div>
             
              <div className='dialog-content'>
              <h1 className='dialog-icon succes'>&#10004;</h1>
              <h1 className='dialog-title'>¡Vamos!</h1>
              <h6 className='dialog-subtitle'>Todo ha salido bien :)</h6>
              <div className='dialog-btn-cont'>
                  <btn className='action-btn' onClick={()=>changeModal(0)}>Cerrar Pestaña</btn>
              </div>
              
              </div>
  
          </section>
      </>
    )
}

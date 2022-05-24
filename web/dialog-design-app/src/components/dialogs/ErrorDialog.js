import React from 'react'

export const ErrorDialog = ({changeModal}) => {
  

    return (
        <>
            <section className='dialog'>
                <div className='dialog-close' onClick={()=>changeModal(0)}>&#10006;</div>
               
                <div className='dialog-content'>
                <h1 className='dialog-icon error'>&#10006;</h1>
                <h1 className='dialog-title'>Upss</h1>
                <h6 className='dialog-subtitle'>Algo ha pasado</h6>
                
                </div>
    
            </section>
        </>
      )
}

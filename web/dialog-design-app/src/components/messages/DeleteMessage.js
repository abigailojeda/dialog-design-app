import React from 'react';

export const DeleteMessage = ({changeMessage}) => {


  return (
    <>
        <h3>El elemento ha sido eliminado con éxito</h3>
        <div className= 'message-close delete' onClick={()=>changeMessage(0)}>
            <h6>&#10006;</h6>
        </div>
    </>
  )
}

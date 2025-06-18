import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Form from './Form'

function InstantForm() {
    const {showInstantForm,setShowInstantForm}=useContext(AppContext)
      const handleBackgroundClick = (e) => {
    if (e.target.id === "popupOverlay") {
      setShowInstantForm(false);
    }
  };
  return (
    <>
    {showInstantForm &&(
        <div  id="popupOverlay" onClick={handleBackgroundClick} className='instantform_main'>
           <div className='if_container'>
             <Form/>
           </div>
        </div>
    )}
    </>
  )
}

export default InstantForm
import React from 'react'

import './form-input.css'
import icons from './symbol-defs.svg'

const FormInput = () => {
   return (
      <>
         <div className="form-input">
            <label className="form-input__label">Email</label>
            <div className="form-input__input-container">
               <input type="text" className="form-input__input" placeholder="your-email@mail.com" />
               <div className="form-input__icon-container">
                  <svg className="form-input__icon">
                     <use xlinkHref={`${icons}#icon-person`}></use>
                  </svg>
                  <div className="form-input__icon-line"></div>
               </div>
            </div>
         </div>
      </>
   )
}

export default FormInput

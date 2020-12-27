import React from 'react';

import './form-input.scss'

const FormInput = () => {
    return (
        <div className="form-input">
            <input type="text" className="form-input__input" placeholder='your-email@mail.com' />
            <div className="form-input__img-container">
                <div className="form-input__img">
                    <svg className="form-input__icon">
                        <use xlinkHref="/symbol-defs.svg#icon-person"></use>
                    </svg>
                </div>
            </div>
        </div >
    );
};

export default FormInput;
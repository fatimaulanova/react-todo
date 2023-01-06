import React from 'react';
import '../../App.css'

const Modal = ({active, setAktive, children}) => {

    return (
        <div className={active ? 'modal active' : "modal"} onClick={() => setAktive(false)}>
            <div className={active ? "modal__content active" : "modal__content"}   onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;


import React from 'react';
import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';

    const Backdrop = (props) => {
        return <div className = {classes.backdrop} onClick={props.onClose}></div>
    }
    const ModalOverlay = (props) => {
        return (
            <div className = {classes.modal}>
                <div className = {classes.content}>{props.children}</div>
            </div>
        )
    }

    const portalElem = document.getElementById('overlays');
    
    function Modal(props){
        return <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, portalElem)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElem)}
        </React.Fragment>
    }

export default Modal;
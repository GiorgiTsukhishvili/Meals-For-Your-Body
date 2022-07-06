import React from "react";
import { Fragment } from "react";
import "./Modal.css";

function Backdrop({ seeCart }) {
  return <div className="backdrop" onClick={seeCart}></div>;
}

function ModalOverlay(props) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}

function Modal(props) {
  return (
    <Fragment>
      <Backdrop seeCart={props.seeCart} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
}

export default Modal;

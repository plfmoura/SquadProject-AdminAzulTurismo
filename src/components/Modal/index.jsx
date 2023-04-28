import React from "react";
import Modal from "react-bootstrap/Modal";

export default function OurModal(props) {

  return (
    <Modal
      {...props}
      size={props.modalsize ? props.modalsize : "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      style={props.modalheight && { height: `${props.modalheight}`, borderRadius: '20px' }}
      centered
    >
      <Modal.Body
        style={{
          textAlign: "center",
          minHeight: '80vh',
          display: "grid",
          placeContent: 'center'
        }}
      >
      {props.children}
    </Modal.Body>
    </Modal >
  );
}

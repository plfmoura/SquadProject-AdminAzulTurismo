import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function OurModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        style={{
          textAlign: "center",
          minHeight: '80vh'
        }}
      >
        {props.children}
      </Modal.Body>
    </Modal>
  );
}

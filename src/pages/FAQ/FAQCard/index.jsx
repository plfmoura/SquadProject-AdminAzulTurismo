import React, { useState } from "react";
import { RiSettings5Fill, RiDeleteBin6Fill } from "react-icons/ri";
import "./faqCard.css";

export default function FAQCard({ text, status, user, date, onSettings, onDelete }) {
  return (
    <div className="faqCard-container">
      <textarea
        name="question"
        cols="20"
        rows="3"
        value={text}
        readOnly
        className="faqCard-question-area"
      ></textarea>
      <div className="faqCard-footer-area">
        <RiDeleteBin6Fill className="faqCard-delete-icon" onClick={onDelete}/>
        { status != "" ? <span style={{color: '#2ea9ff'}}>Pergunta respondida!</span> : <span style={{color: '#ff0000'}}>Aguardando resposta.</span>}
        <RiSettings5Fill className="faqCard-settings-icon" onClick={onSettings}/> 
      </div>
    </div>
  );
}

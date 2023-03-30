import React, { useState } from "react";
import { RiSettings5Fill, RiDeleteBin6Fill } from "react-icons/ri";
import "./faqCard.css";

export default function FAQCard({ text, status, user, date }) {
  return (
    <div className="faqCard-container">
      <textarea
        name="question"
        cols="20"
        rows="3"
        value={text}
        className="faqCard-question-area"
      ></textarea>
      <div className="faqCard-footer-area">
        <RiDeleteBin6Fill className="faqCard-delete-icon"/>
        { status && <span style={{color: '#2ea9ff'}}>Pergunta Respondida!</span>}
        <RiSettings5Fill className="faqCard-settings-icon"/> 
      </div>
    </div>
  );
}

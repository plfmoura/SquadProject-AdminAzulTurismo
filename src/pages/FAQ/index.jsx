import React, { useContext, useEffect } from 'react'
import { Button } from "react-bootstrap";
import { CardContext } from "../../context/CardContext";
import { RiSearchLine } from "react-icons/ri";
import './faq.css'
import FAQCard from './FAQCard';

export default function FAQ() {
  const { handleClean, setQuestions } = useContext(CardContext)

  useEffect(() => {
    handleClean()
    setQuestions(true)
  } ,[])

  return (
    <div className="Faq-container">
      <header className="faq-header">
        <div className="faq-header-content">
          <h1>Perguntas de usuários</h1>
          <div className="faq-shotcuts">
            <span>Perguntas mais recentes</span>
            <span>Perguntas mais antigas</span>
          </div>
        </div>
        <div className="search-container">
          <input type="text" name="search" id="search" />
          <Button variant="primary"><RiSearchLine /></Button>
        </div>
      </header>
      <section className="faq-content">
        <FAQCard status={true}/>
      </section>
    </div>
  )
}

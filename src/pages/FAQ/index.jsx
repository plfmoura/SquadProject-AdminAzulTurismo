import React, { useContext, useEffect } from 'react'
import { CardContext } from "../../context/CardContext";

export default function FAQ() {
  const { handleClean, setQuestions } = useContext(CardContext)

  useEffect(() => {
    handleClean()
    setQuestions(true)
  } ,[])

  return (
    <div>
      <h1>página de perguntas de usuários</h1>
    </div>
  )
}

import React, { useEffect } from 'react'
import NavBar from "../../components/NavBar";
import './404error.css'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ErrorMotion from '../../assets/Animations/ErrorMotion';

export default function ErrorPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='ErrorPage'>
      <NavBar />
      <article className='error-content'>
        <ErrorMotion />
        <div className='align-text'>
          <h2>Algo deu errado...</h2>
          <Button variant="primary" type="button" onClick={() => navigate(-1)}>
          Voltar
        </Button>
        </div>
      </article>
    </div>
  )
}

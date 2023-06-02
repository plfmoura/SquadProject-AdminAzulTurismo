import React, { useContext, useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import { CardContext } from "../../context/CardContext";
import { RiSearchLine } from "react-icons/ri";
import './faq.css'
import FAQCard from './FAQCard';
import { useDispatch, useSelector } from 'react-redux';
import PreLoader from '../../assets/Animations/PreLoader'
import OurModal from '../../components/Modal'
import FAQInfo from './FAQInfo';
import { deleteDuvida } from './faqActions';
import { delDuvida } from '../../reducer/duvidasReducer';
import DeleteSuccess from '../../assets/Animations/DeleteSuccess'
import ActionSuccess from '../../assets/Animations/ActionSuccess';
import { checkError } from '../../services/checkErrorStatus';

export default function FAQ() {
  const { handleClean, setQuestions } = useContext(CardContext)
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    handleClean()
    setQuestions(true)
  }, [])

  useEffect(() => {
    setData(state.duvidas.duvidas)
    setTimeout(() => {
      setLoading(false)
    }, [3000])
  }, [state])

  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [deletedStatus, setDeletedStatus] = useState(false)
  const [showAnimation, setShowAnimation] = useState(null)

  const handleQuestionSelected = (key) => {
    setSelectedQuestion(key)
    setModalShow(true)
  }

  const handleDeleteQuestion = async (key) => {
    let id = key;
    try {
      let status = await deleteDuvida(id)
      dispatch(delDuvida(id))
      setDeletedStatus(status)
      setShowAnimation(<><DeleteSuccess /><p style={{ color: '#fff', fontWeight: '600' }}>A pergunta foi excluída!</p></>)
    } catch (error) {
      console.log(checkError(error))
    }
  }

  useEffect(() => {
    if (deletedStatus) {
      setTimeout(() => {
        setDeletedStatus(false)
      }, [4000])
    }
  }, [deletedStatus])

  const handleSubmitAnswer = () => {
    setModalShow(false)
    setDeletedStatus(true)
    setShowAnimation(<><ActionSuccess /> <p style={{ color: '#fff', fontWeight: '600' }}>Resposta enviada com sucesso!</p></>)
  }

  return (
    <>
      {deletedStatus &&
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 300,
            width: '100%',
            height: '100vh',
            top: 0,
            backgroundColor: '#555555ee'
          }}
        >
          {showAnimation}
        </div>
      }
      <OurModal
        show={modalShow}
        modalsize="md"
        children={
          <FAQInfo onAbort={() => { setModalShow(false) }} filteredKey={selectedQuestion} onSubmit={() => { handleSubmitAnswer() }} />
        }
      />
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
        {!loading ?
          <section className="faq-content">
            {
              data.map((question, key) =>
                <FAQCard
                  status={question.response != "" ? true : false}
                  text={question.question}
                  key={key}
                  onSettings={() => { handleQuestionSelected(question.id_duvida) }}
                  onDelete={() => { handleDeleteQuestion(question.id_duvida) }}
                />
              )
            }
          </section> : <PreLoader />
        }
      </div>
    </>
  )
}

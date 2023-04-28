import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './faqInfo.css'
import { useDispatch, useSelector } from 'react-redux';
import { patchDuvida } from '../faqActions';
import { updateDuvida } from '../../../reducer/duvidasReducer';

export default function FAQInfo({ onAbort, onSubmit, filteredKey }) {
    const state = useSelector((state) => state);
    const [data, setData] = useState();
    const dispatch = useDispatch()
    const [submitStatus, setSubmitStatus] = useState('')
    const [myAnswer, setMyAnswer] = useState('')

    useEffect(() => {
        if (filteredKey) {
            state.duvidas.duvidas.filter(question => question.id_duvida === filteredKey).map(item => setData(item))
        }
    }, [])

    const handleShowStatus = (status) => {
        setSubmitStatus(status)
        setTimeout(() => {
            setSubmitStatus('')
        }, [4000])
    }

    const handleSubmitResponse = (e) => {
        e.preventDefault()
        let id = filteredKey
        let answer = e.target.answer.value
        let status = false
        if (answer === "") {
            handleShowStatus(<span style={{ color: '#f00' }}>O campo de resposta está vázio!</span>)
            return
        }
        try {
            patchDuvida(id, { response: answer })
            dispatch(updateDuvida({
                id: id,
                response: answer
            }))
            status = true
        } catch (error) {
            console.log(error)
        }
        return status
    }

    return (
        <>
            {data &&
                <form className='FaqInfo-container' onSubmit={(e) => { handleSubmitResponse(e) }}>
                    <div className="info-content">
                        <label className="info-title">{data.title}</label>
                        <textarea cols="30" rows="8" value={data.question} readOnly id='user-question-textArea' />
                    </div>
                    <div className="info-content">
                        <label className="info-title">Resposta do Administrador</label>
                        <textarea cols="30" rows="8" id='answer' onChange={(e) => setMyAnswer(e.target.value)} defaultValue={data.response ? data.response : ""} />
                    </div>
                    {submitStatus === '' ? <span style={{ visibility: 'hidden' }}> - </span> : <span>{submitStatus}</span>}{myAnswer.length > 0 && <span style={{ position: 'absolute', right: '7%', bottom: '19%', color: `${myAnswer.length >= 200 ? "#2ea9ff" : "#000"}` }}>{myAnswer.length}/200</span>}
                    <footer className="info-footer" >
                        <Button variant="success" type="submit" onClick={myAnswer !== '' ? onSubmit : null}>
                            Responder
                        </Button>
                        <Button variant="danger" onClick={onAbort}>
                            Cancelar
                        </Button>
                    </footer>
                </form>
            }
        </>
    )
}

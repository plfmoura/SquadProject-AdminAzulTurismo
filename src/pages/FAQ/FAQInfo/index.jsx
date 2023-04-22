import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './faqInfo.css'
import { useDispatch, useSelector } from 'react-redux';
import { patchDuvida } from '../faqActions';

export default function FAQInfo({ onAbort, onSubmit, filteredKey }) {
    const state = useSelector((state) => state);
    const [data, setData] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        if (filteredKey) {
            state.duvidas.duvidas.filter(question => question.id_duvida === filteredKey).map(item => setData(item))
        }
    }, [])

    const handleSubmitResponse = (e) => {
        e.preventDefault()
        let id = filteredKey
        let answer = e.target.answer.value
        try {
            patchDuvida(id, { response: answer })
            dispatch(updateDuvida({
                id: id,
                newResponse: answer
            }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {data &&
                <form className='FaqInfo-container' onSubmit={(e) => { handleSubmitResponse(e) }}>
                    <div className="info-content">
                        <label className="info-title">Pergunta de nome do usuario</label>
                        <textarea cols="30" rows="8" value={data.question} readOnly id='user-question-textArea' />
                    </div>
                    <div className="info-content">
                        <label className="info-title">Resposta do Administrador</label>
                        <textarea cols="30" rows="8" id='answer' defaultValue={data.response ? data.response : ""} />
                    </div>
                    <footer className="info-footer" >
                        <Button variant="success" type="submit" onClick={onSubmit}>
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

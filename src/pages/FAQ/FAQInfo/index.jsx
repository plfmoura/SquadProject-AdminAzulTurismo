import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './faqInfo.css'
import { useSelector } from 'react-redux';

export default function FAQInfo({ onAbort, onSubmit, filteredKey }) {
    const state = useSelector((state) => state);
    const [data, setData] = useState();

    useEffect(() => {
        if (filteredKey) {
            state.faq.faq.filter(question => question.id_faq === filteredKey).map(item => setData(item))
        }
    }, [])

    return (
        <>
            {data &&
                <div className='FaqInfo-container'>
                    <div className="info-content">
                        <label className="info-title">Pergunta de nome do usuario</label>
                        <textarea cols="30" rows="8" value={data.question} readOnly id='user-question-textArea' />
                    </div>
                    <div className="info-content">
                        <label className="info-title">Resposta do Administrador</label>
                        <textarea cols="30" rows="8" defaultValue={data.response ? data.response : ""} />
                    </div>
                    <footer className="info-footer" >
                        <Button variant="success" type="submit">
                            Responder
                        </Button>
                        <Button variant="danger" onClick={onAbort}>
                            Cancelar
                        </Button>
                    </footer>

                </div>
            }
        </>
    )
}

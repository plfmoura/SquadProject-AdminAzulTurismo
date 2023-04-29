import React from 'react'
import './styles.css'

export default function UserContent() {
    return (
        <div className='UserContent-container'>
            <div className="userContent-content">
                <img src="" alt="" className="userContent-picture" />
                <div className="user-info-container">
                    <h2 className="user-name">Nome de usuário</h2>
                    <p className="user-level">Nível: Fominha de excursão</p>
                    <p className="user-date">Data de cadastro: 00/00/00</p>
                    <p className="user-locality">Localidade: São Paulo - SP</p>
                    <p className="user-number">Telefone: 1190000-0000</p>
                </div>
                <div className="action-icons">
                    <button>Apagar</button>
                    <button>Alterar</button>
                </div>
            </div>
            <div className="userContent-statics">
                <div className="total-purchase">
                    <p>Compras totais</p>
                    <div>
                        <button>Icone</button>
                        <span>00</span>
                    </div>
                </div>
                <div className="total-rating">
                    <p>Avaliações totais</p>
                    <div>
                        <button>Icone</button>
                        <span>000</span>
                    </div>
                </div>
            </div>
            <hr />
            <h3>Galeria</h3>
            <div className="userContent-gallery">
                
            </div>
        </div>
    )
}

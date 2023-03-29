import React from "react";
import { Button } from "react-bootstrap";
import "./addTour.css";

export default function AddTour({ onAbort }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Done!");
  };

  return (
    <form className="Add-new-tour-container" onSubmit={handleSubmit}>
      <header className="add-new-tour-header">
        <h5>Adicionar novo Destino</h5>
      </header>
      <main className="add-new-tour-content">
        <label style={{ textAlign: "left", width: "100%" }}>
          Adicione 4 imagens referentes ao Destino
        </label>
        <section className="add-new-tour-image_container">
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </section>
        <section className="add-new-tour-input-fields">
            <div className="left-form-side">
                <div>
                    <label htmlFor="name">Nome do Destino</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Localização do destino</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Região do destino</label>
                    <input type="text" />
                </div>
                <label htmlFor="">Coordenadas do destino</label>
                <div>
                    <input type="text" placeholder="Latitude"/>
                    <input type="text" placeholder="Longitude"/>
                </div>
            </div>
            <div className="right-form-side">
                <div>
                    <label htmlFor="name">Descrição do Destino</label>
                    <textarea></textarea>
                </div>
                <label htmlFor="name">Disponibilidade e Valor</label>
                <div>
                    <input type="number" placeholder="Tickets Totais"/>
                    <input type="text" placeholder="Data do Passeio"/>
                    <input type="text" placeholder="VALOR"/>
                </div>
            </div>
            
        </section>
      </main>
      <footer className="add-new-tour-footer">
        <Button variant="success" type="submit">
          Adicionar
        </Button>
        <Button variant="danger" onClick={onAbort}>
          Cancelar
        </Button>
      </footer>
    </form>
  );
}

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../AddTour/addTour.css";

export default function EditTour({ onAbort, onDelete, filterKey }) {
  const state = useSelector((state) => state);
  const [data, setData] = useState();

  useEffect(() => {
    if(filterKey){
      state.tour.tour.filter(tour => tour.id === filterKey).map(item => setData(item))
    }
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Done!");
  };

  console.log(filterKey)
  return (
  <>
    {data ? ( 
      <form className="Add-new-tour-container" onSubmit={handleUpdate}>
        <header className="add-new-tour-header">
          <h5>Adicionar novo Destino</h5>
        </header>
        <main className="add-new-tour-content">
          <label style={{ textAlign: "left", width: "100%" }}>
            Adicione 4 imagens referentes ao Destino
          </label>
          <section className="add-new-tour-image_container">
            <img src={data.imagens[0]} width='20%'/>
            <img src={data.imagens[1]} width='20%'/>
            <img src={data.imagens[2]} width='20%'/>
            <img src={data.imagens[3]} width='20%'/>
          </section>
          <section className="add-new-tour-input-fields">
              <div className="left-form-side">
                  <div>
                      <label htmlFor="name">Nome do Destino</label>
                      <input type="text" defaultValue={data.name}/>
                  </div>
                  <div>
                      <label htmlFor="">Localização do destino</label>
                      <input type="text" defaultValue={data.located}/>
                  </div>
                  <div>
                      <label htmlFor="">Região do destino</label>
                      <input type="text" defaultValue={data.region}/>
                  </div>
                  <label htmlFor="">Coordenadas do destino</label>
                  <div>
                      <input type="text" placeholder="Latitude" defaultValue={data.latitude}/>
                      <input type="text" placeholder="Longitude" defaultValue={data.longitude}/>
                  </div>
              </div>
              <div className="right-form-side">
                  <div>
                      <label htmlFor="name">Descrição do Destino</label>
                      <textarea defaultValue={data.description}></textarea>
                  </div>
                  <label htmlFor="name">Disponibilidade e Valor</label>
                  <div>
                      <input type="number" placeholder="Tickets Totais" defaultValue={data.capacity}/>
                      <input type="text" placeholder="Data do Passeio" defaultValue={data.Date}/>
                      <input type="text" placeholder="VALOR" defaultValue={data.price}/>
                  </div>
              </div>
              
          </section>
        </main>
        <footer className="add-new-tour-footer" style={{width: '80%'}}>
          <Button variant="success" type="submit">
            Atualizar
          </Button>
          <Button variant="primary" onClick={onAbort}>
            Descartar Modificações
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Excluír Destino
          </Button>
        </footer>
      </form>
    ) : (
      <span>Carregando</span>
    )
  }</>
  );
}

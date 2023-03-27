import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTour } from "../../reducer/tourReducer";
import axios from "axios";
import { Button } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";
import { BsPlusSquareFill } from "react-icons/bs";
import './tour.css'
import { CardContext } from "../../context/CardContext";
import TourCard from "./TourCard";

export default function Tour() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [data, setData] = useState();
  const [showLoad, setShowLoad] = useState(false);
  const {handleClean, setTickets} = useContext(CardContext)

  useEffect(() => {
    handleClean()
    setTickets(true)
  } ,[])

  useEffect(() => {
    setData(state.tour.tour);
    setTimeout(() => {
      setShowLoad(!showLoad);
    }, [3000]);
  }, [state]);

  return (
    <div className="Tour-container">
      <header className="tour-header">
        <div className="tour-header-content">
          <h1>Passes Disponíveis</h1>
          <div className="tour-shotcuts">
            <span>Passeios mais frequentes</span>
            <span>Passeios mais avaliados</span>
            <span>Passeios com maior disponibilidade</span>
          </div>
        </div>
        <div className="search-container">
          <input type="text" name="search" id="search" />
          <Button variant="primary"><RiSearchLine /></Button>
        </div>
      </header>
      <section className="tour-content">
        <div className="card-add-newTour">
          <div 
            className="car-add-newTour-content"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: '#c1c1c1',
              borderRadius: "10px",
              width: "16rem",
              height: "20rem",
              gap: 5,
              boxShadow: "#333333ff 0px 1px 3px 1px",
            }}>
            <BsPlusSquareFill style={{fontSize: '2.2rem', color: '#333', borderRadius: 10}}/>
            <span>Adicionar novo Destino</span>
          </div>
        </div>
        {
          data && data.map((tour) => (
            <TourCard 
              media={tour.imagens[0]} 
              avaiableTickets={tour.capacity - tour.sold} 
              purchaseValue={tour.price}
              located={tour.located}
              totalPurchase={0}
              tourName={tour.name}
              key={tour.id}/>
          ))
        }
      </section>
    </div>
  );
}

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
import OurModal from "../../components/Modal";
import AddTour from "./AddTour";
import EditTour from "./EditTour";
import { deleteTour } from "./tourActions";
import ActionSuccess from "../../assets/Animations/ActionSuccess";
import DeleteSuccess from "../../assets/Animations/DeleteSuccess";
import { ActionsAlertContext } from "../../context/ActionsAlertContext";

export default function Tour() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [data, setData] = useState();
  const [showLoad, setShowLoad] = useState(false);
  const { handleClean, setTickets } = useContext(CardContext)
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    handleClean()
    setTickets(true)
  }, [])

  useEffect(() => {
    setData(state.tour.tour);
    setTimeout(() => {
      setShowLoad(!showLoad);
    }, [3000]);
  }, [state]);

  const [edit, setEdit] = useState(true)

  const [selectedTour, setSelectedTour] = useState(null)

  const handleTourSelected = (key) => {
    setSelectedTour(key)
    setEdit(true)
    setModalShow(true)
  }

  // Motion action animations context 
  const { showAnimation, actionStatus } = useContext(ActionsAlertContext)

  return (
    <>
      {actionStatus &&
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
        </div>}
      <OurModal
        show={modalShow}
        children={!edit ? (
          <AddTour onAbort={() => setModalShow(false)} />
        ) : (
          <EditTour filterKey={selectedTour} onAbort={() => setModalShow(false)} onDelete={deleteTour} />
        )
        }
      />
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
          <div className="card-add-newTour" onClick={() => { setModalShow(true); setEdit(false) }}>
            <div
              className="car-add-newTour-content"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: '#c1c1c120',
                borderRadius: "10px",
                width: "16rem",
                height: "23rem",
                gap: 5,
              }}>
              <BsPlusSquareFill style={{ fontSize: '2.2rem', borderRadius: 10 }} />
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
                date={tour.Date}
                totalPurchase={tour.sold}
                tourName={tour.name}
                id={tour.id}
                key={tour.id}
                onPress={() => handleTourSelected(tour.id)}
              />
            ))
          }
        </section>
      </div>
    </>
  );
}

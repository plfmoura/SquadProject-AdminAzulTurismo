import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTour } from "../../reducer/tourReducer";
import axios from "axios";
import { Button } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";
import './tour.css'

export default function Tour() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="Tour-container">
      <header className="tour-header">
        <div className="tour-header-content">
          <h1>Passeios Disponíveis</h1>
          <div className="tour-shotcuts">
            <span>Passeios mais Comprados</span>
            <span>Passeios mais Avaliados</span>
          </div>
        </div>
        <div className="search-container">
          <input type="text" name="search" id="search" />
          <Button variant="primary"><RiSearchLine /></Button>
        </div>
      </header>
      <section className="tour-content">

      </section>
    </div>
  );
}

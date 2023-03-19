import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCompras } from "../../reducer/comprasReducer";
import axios from "axios";
import './purchase.css'
import { Button } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";
import PurchaseCard from "./PurchaseCard";

export default function Purchase() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="Purchase-container">
      <header className="purchase-header">
        <div className="purchase-header-content">
          <h1>Resumo de Compras</h1>
          <div className="purchase-shotcuts">
            <span>Compras mais recentes</span>
            <span>Compras mais antigas</span>
          </div>
        </div>
        <div className="search-container">
          <input type="text" name="search" id="search" />
          <Button variant="primary"><RiSearchLine /></Button>
        </div>
      </header>
      <section className="purchase-content">
        <PurchaseCard media='../../public/azul.png' name='Arraial do Cabo' date='24/03/2023'/>
        <PurchaseCard media='../../public/azul.png' name='Arraial do Cabo' date='24/03/2023'/>
        <PurchaseCard media='../../public/azul.png' name='Arraial do Cabo' date='24/03/2023'/>
        <PurchaseCard media='../../public/azul.png' name='Arraial do Cabo' date='24/03/2023'/>
        <PurchaseCard media='../../public/azul.png' name='Arraial do Cabo' date='24/03/2023'/>
        <PurchaseCard media='../../public/azul.png' name='Arraial do Cabo' date='24/03/2023'/>
        <PurchaseCard media='../../public/azul.png' name='Arraial do Cabo' date='24/03/2023'/>
      </section>
    </div>
  );
}

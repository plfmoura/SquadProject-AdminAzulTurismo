import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './purchase.css'
import { Button } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";
import PurchaseCard from "./PurchaseCard";
import PreLoader from "../../assets/Animations/PreLoader";

export default function Purchase() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [ purchaseData, setPurchaseData ] = useState()
  const [ load, setLoad ] = useState(true)

  useEffect(() => {
    setPurchaseData(state.compras)
    setTimeout(() => {
      setLoad(!load)
    }, [3000])
  }, [state.compras]);

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
      { load ? (<div style={{display: 'grid', placeContent: 'center'}}><PreLoader /></div>) : (
        <>
          {purchaseData &&
            purchaseData.compras.map((item, key) => (
              <PurchaseCard 
                media={item.imagens} 
                name={item.located} 
                date={item.data_compra.replaceAll('-', '/')}
                payment={item.payment.toFixed(2)}
                status={true}
                key={key}
              />
            )) 
          }
        </>
        )}
        </section>
    </div>
  );
}

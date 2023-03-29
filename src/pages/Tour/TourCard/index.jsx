import React, { useState } from "react";
import {
  RiSettings5Fill,
  RiCheckboxCircleFill,
  RiCoupon2Fill,
  RiCheckboxFill
} from "react-icons/ri";
import { AiFillCloseSquare } from "react-icons/ai";
import "./tourCard.css";

export default function TourCard({
  media,
  tourName,
  located,
  date,
  purchaseValue,
  avaiableTickets,
  totalPurchase,
  onPress,
}) {

  const [ smallMenu, setSmallMenu ] = useState(false)
  const [ dateController, setDateController ] = useState(false)
  const [ priceController, setPriceController ] = useState(false)

  const alterDate = () => {
    setSmallMenu(false)
    setDateController(!dateController)
  }

  const alterPurchasePrice = () => {
    setSmallMenu(false)
    setPriceController(!priceController)
  }

  const openSmallMenu = () => {
    setSmallMenu(!smallMenu)
    setDateController(false)
    setPriceController(false)
  }

  return (
    <div className="tourCard-container">
      <div className="tourCard-align-first-content">
        <img src={media} />
        <div>
          <label>{tourName}</label>
          <label>{located}</label>
          {/* Tour price controller // conditional render  */}
          {priceController ? ( 
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <input type="tel" defaultValue={purchaseValue} className='tour-card-editable-input'/> 
              <RiCheckboxFill 
                  onClick={() => setPriceController(!priceController)}
                  style={{fontSize: 30, color: '#00aa00'}}/>
              <AiFillCloseSquare 
                onClick={() => setPriceController(false)}
                style={{fontSize: 30, color: '#aa0000'}}/>
            </div>
            ) : (
            <span>R${purchaseValue}</span>)}
          {/* Tour date controller // conditional render  */}
          {dateController ? (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <input type="text" defaultValue={date} className='tour-card-editable-input'/>
              <RiCheckboxFill 
                onClick={() => setDateController(!dateController)}
                style={{fontSize: 30, color: '#00aa00'}}/>
              <AiFillCloseSquare 
                onClick={() => setDateController(false)}
                style={{fontSize: 30, color: '#aa0000'}}/>
            </div>
            ) : (
            <label>Data prevista: <strong>{date}</strong></label>)}
        </div>
      </div>
      <div className="tourCard-footer-content">
        <div className="total-tour-content">
          <label style={{ fontSize: 12}}>
            Compras totais
          </label>
          <div>
            <RiCheckboxCircleFill style={{ fontSize: "30px" }} />
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              {totalPurchase}
            </span>
          </div>
        </div>
        <div className="total-tour-content">
          <label style={{ fontSize: 12}}>
            Passes disponíveis
          </label>
          <div>
            <RiCoupon2Fill style={{ fontSize: "30px" }} />
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              {avaiableTickets}
            </span>
          </div>
        </div>
        <div >
          <RiSettings5Fill 
            className="tourCard-settings-icon" 
            onClick={openSmallMenu}
            style={smallMenu && {color: '#0044ff', animation: 'none'}}
          />
          {smallMenu && 
            <nav className="tour-card-small-menu">
              <label onClick={alterPurchasePrice}>Alterar Valor</label>
              <label onClick={alterDate}>Alterar Data</label>
              <label onClick={onPress}>Alterações Gerais</label>
            </nav>}
        </div>
      </div>
    </div>
  );
}

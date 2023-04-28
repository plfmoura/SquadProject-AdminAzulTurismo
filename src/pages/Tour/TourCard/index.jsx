import React, { useContext, useRef, useState } from "react";
import {
  RiSettings5Fill,
  RiCheckboxCircleFill,
  RiCoupon2Fill,
  RiCheckboxFill
} from "react-icons/ri";
import { AiFillCloseSquare } from "react-icons/ai";
import "./tourCard.css";
import { deleteTour, patchTour} from "../tourActions";
import { useDispatch } from "react-redux";
import { delTour, updateData, updatePrice } from "../../../reducer/tourReducer";
import { ActionsAlertContext } from "../../../context/ActionsAlertContext";
import ActionSuccess from "../../../assets/Animations/ActionSuccess";

export default function TourCard({
  media,
  tourName,
  located,
  date,
  purchaseValue,
  avaiableTickets,
  totalPurchase,
  id,
  onPress
}) {
  const [ smallMenu, setSmallMenu ] = useState(false)
  const [ dateController, setDateController ] = useState(false)
  const [ priceController, setPriceController ] = useState(false)
  const dispatch = useDispatch();
  const inputDate=useRef();
  const inputPrice=useRef();
  const { showMotionAction } = useContext(ActionsAlertContext)

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

  const handleCloseMenu = () => {
    setTimeout(() => { setSmallMenu(false)}, [1000])
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
              <input type="text" defaultValue={purchaseValue} className='tour-card-editable-input' ref={inputPrice} 
              onKeyDown={(e)=>{
                e.preventDefault();
                if(e.key.charCodeAt()>47 && e.key.charCodeAt()<58){
                e.target.value=e.target.value+e.key;
                }

                if(!e.target.value.includes(".")&&e.key.charCodeAt()==46){
                  e.target.value=e.target.value+e.key;
                  return;
                }

                if(e.key.charCodeAt()==66){
                  e.target.value=e.target.value.slice(0,-1);
                  return;
                }
              }            
            }
              />
              <RiCheckboxFill 
                  onClick={() => {
                    //Patch do price
                    patchTour(id,{price:Number(inputPrice.current.value).toFixed(2)});
                    dispatch(
                      updatePrice({id:id,price:Number(inputPrice.current.value).toFixed(2)})
                    );
                    setPriceController(!priceController)
                    showMotionAction(<ActionSuccess />, 'O valor foi alterado com sucesso!', 3000)
                  }}
                  className='done-icon-editable-input'
                  />
              <AiFillCloseSquare 
                onClick={() => setPriceController(false)}
                className='cancel-icon-editable-input'
                />
            </div>
            ) : (
            <span>R${purchaseValue}</span>)}
          {/* Tour date controller // conditional render  */}
          {dateController ? (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <input type="date" defaultValue={ date.split("-")[2]+"-"+date.split("-")[1]+"-"+date.split("-")[0]} className='tour-card-editable-input' ref={inputDate}
              min={new Date().toISOString().split('T')[0]}
              />
              <RiCheckboxFill 
                onClick={() => {    
                  //date em formato dd-mm-yyyy
                  let date= inputDate.current.value.split("-")[2]+"-"+inputDate.current.value.split("-")[1]+"-"+inputDate.current.value.split("-")[0]
                  //Patch da date
                  
              patchTour(id,{Date:date});
                  dispatch(
                    updateData({id:id,newDate:date})
                  );          
                  setDateController(!dateController)}}
                className='done-icon-editable-input'
                />
              <AiFillCloseSquare 
                onClick={() => setDateController(false)}
                className='cancel-icon-editable-input'
                />
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
            <nav className="tour-card-small-menu" onMouseLeave={ handleCloseMenu }>
              <label onClick={alterPurchasePrice}>Alterar Valor</label>
              <label onClick={alterDate}>Alterar Data</label>
              <label style={{color: '#777'}}>Desabilitar</label>
              <label style={{color: '#ff0000'}} onClick={()=>{deleteTour(id);
              dispatch(delTour(id));
              }}>Excluir</label>
              <label onClick={onPress}>Alterações Gerais</label>
            </nav>}
        </div>
      </div>
    </div>
  );
}

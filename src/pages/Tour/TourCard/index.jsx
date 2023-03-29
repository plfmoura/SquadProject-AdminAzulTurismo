import React from "react";
import {
  RiSettings5Fill,
  RiCheckboxCircleFill,
  RiCoupon2Fill,
} from "react-icons/ri";
import "./tourCard.css";

export default function TourCard({
  media,
  tourName,
  located,
  purchaseValue,
  avaiableTickets,
  totalPurchase,
  onPress
}) {
  return (
    <div className="tourCard-container" onClick={onPress}>
      <div className="tourCard-align-first-content">
        <img src={media} />
        <div>
          <label>{tourName}</label>
          <label>{located}</label>
          <span>R${purchaseValue}</span>
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
        <RiSettings5Fill style={{ fontSize: "30px", marginBottom: 3 }} />
      </div>
    </div>
  );
}

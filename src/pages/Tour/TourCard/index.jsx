import React from "react";
import {
  RiSettings5Fill,
  RiDeleteBin6Fill,
  RiCheckboxCircleFill,
  RiCoupon2Fill,
} from "react-icons/ri";

export default function TourCard({
  media,
  tourName,
  located,
  purchaseValue,
  avaiableTickets,
  totalPurchase
}) {
  return (
    <div
      className="tourCard-container"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: '#fff',
        borderRadius: "10px",
        width: "16rem",
        height: "20rem",
        boxShadow: "#33333360 0px 1px 3px 1px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: 'column',
          justifyContent: 'initial',
          margin: "1rem auto",
          width: '90%',
          height: '100%'
        }}
      >
        <img
          src={media}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }}
        />
        <div style={{
              fontSize: "14px",
            }}>
          <p>{tourName}</p>
          <span >{located}</span>
          <span style={{display: 'block'}}>R${purchaseValue}</span>
        </div>
      </div>
      <div
        className="card-footer"
        style={{
          display: "flex",
          alignItems: "flex-end",
          margin: "1rem auto",
          width: "90%",
          height: '40%'
        }}
      >
        <div className="total-purchase-content">
            <label style={{fontSize: 12}}>Compras totais</label>
            <RiCheckboxCircleFill style={{ fontSize: "30px" }} />
            <span>{totalPurchase}</span>
        </div>
        <div className="avaiable-tickets-content">
            <label style={{fontSize: 12}}>Passes disponíveis</label>
            <RiCoupon2Fill style={{ fontSize: "30px" }}/>
            <span>{avaiableTickets}</span>
        </div>
        <RiSettings5Fill style={{ fontSize: "30px" }} />
    </div>
    </div>
  );
}

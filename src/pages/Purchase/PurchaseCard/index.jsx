import React from "react";
import { Button } from "react-bootstrap";
import { RiSettings5Fill, RiDeleteBin6Fill } from "react-icons/ri";

export default function PurchaseCard({ media, name, date, status }) {
  return (
    <div
      className="purchase-card-container"
      style={{
        width: "100%",
        height: "6rem",
        backgroundColor: "#fff",
        margin: "0 auto 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: '10px',
        boxShadow: '#33333360 0px 2px 1px 1.5px'
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: '50%',
          margin: '.5rem',
          gap: '2rem'
        }}
      >
        <img
          src={media}
          alt={name}
          style={{ height: "80px", width: '90px', borderRadius: '10px', objectFit: "cover" }}
        />
        <p style={{fontSize: '1rem', margin: '0'}}>{name}</p>
      </div>
      <p style={{fontSize: '1rem', margin: '0'}}>{date}</p>
      <div className="purchase-card-actions" 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'right',
          width: '30%',
          margin: '0 .5rem',
          gap: '2rem'
        }}>
        {status ? (
          <Button variant="success">Disponível</Button>
        ) : (
          <Button variant="danger" disabled>Indisponível</Button>
        )}
        <RiSettings5Fill style={{fontSize: '2.5rem'}}/>
        <RiDeleteBin6Fill style={{fontSize: '2.3rem'}}/>
      </div>
    </div>
  );
}

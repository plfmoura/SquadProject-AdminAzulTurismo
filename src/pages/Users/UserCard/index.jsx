import React from "react";
import {
  RiSettings5Fill,
  RiDeleteBin6Fill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function UserCard({
  media,
  userName,
  initialDate,
  located,
  purchaseAmount,
}) {

  const navigate = useNavigate('')

  return (
    <div
    onClick={() => navigate("/selected-user")}  
    className="userCard-container"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: '#fff',
        borderRadius: "10px",
        width: "15rem",
        height: "14rem",
        boxShadow: "#33333360 0px 1px 3px 1px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: 'initial',
          margin: "1rem",
          width: '90%',
          height: '40%'
        }}
      >
        <img
          src={media}
          alt=""
          style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: 10 }}
        />
        <div style={{
              fontSize: "14px",
              marginLeft: 10
            }}>
          <p >{userName}</p>
          <span style={{display: 'block'}}>{initialDate}</span>
          <span >{located}</span>
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
        <div style={{ width: "80%" }}>
          <span style={{ display: "block" }}>Compras Totais</span>
          <RiCheckboxCircleFill style={{ fontSize: "30px" }} />
          <span
            style={{
              fontSize: "30px",
              fontWeight: 'bold',
              margin: "0 .5rem",
              position: "relative",
              top: '.4rem'
            }}
          >
            {purchaseAmount}
          </span>
        </div>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <RiDeleteBin6Fill style={{ fontSize: "30px" }} />
          <RiSettings5Fill style={{ fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import FormAuth from "./FormAuth";
import "./login.css";
import AzulLogo from "../../../public/azul.png";

export default function Login() {
  return (
    <div className="Login-container">
      <div className="azul-logo">
        <img 
          src={AzulLogo} 
          alt="Logo da empresa Azul Tour" 
          />
        <span>Azul Tour</span>
      </div>
      <FormAuth />
    </div>
  );
}

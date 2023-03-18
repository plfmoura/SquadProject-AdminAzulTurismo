import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdmin } from "../../reducer/adminReducer";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleSubmit = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    const options = {
      method: "POST",
      url: "https://tourismapi.herokuapp.com/admin/login",
      headers: { "Content-Type": "application/json" },
      data: { email: email, password: password },
    };

    try {
      let response = await axios.request(options);
      if (response.status != 200) {
        throw new Error("login invalid");
      }
      dispatch(setAdmin(response.data.user));
      localStorage.setItem("azul_admin", JSON.stringify(response.data.user));
      localStorage.setItem("token_admin", JSON.stringify(response.data.token));
      navigate("/compras");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <form onSubmit={(event) => HandleSubmit(event)}>
        <input type="email" required id="email" />
        <br />
        <input type="password" required id="password" />
        <br />
        <input type="submit" value={"login"} />
      </form>
    </div>
  );
}

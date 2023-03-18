import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { delAdmin, setAdmin } from "../../reducer/adminReducer";
import { setCompras } from "../../reducer/comprasReducer";
import { setTour } from "../../reducer/tourReducer";
import { setUsers } from "../../reducer/usersReducer";
import axios from "axios";
import './navBar.css';
import { Button } from "react-bootstrap";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  let token = JSON.parse(localStorage.getItem("token_admin"));
  
  const getCompras = async () => {
    const options = {
      method: "GET",
      url: "https://tourismapi.herokuapp.com/compras",
      headers: {
        "auth-token": token,
      },
    };
    try {
      let compras = await axios.request(options);
      if (compras.status != 200) {
        throw error("error");
      }
      dispatch(setCompras(compras.data));
    } catch (error) {
      console.log("error");
    }
  };

  const getTour = async () => {
    const options = {
      method: "GET",
      url: "https://tourismapi.herokuapp.com/products",
    };
    try {
      let tour = await axios.request(options);
      if (tour.status != 200) {
        throw error("error");
      }
      dispatch(setTour(tour.data));
    } catch (error) {}
  };

  const getUsers = async () => {
    const options = {
      method: "GET",
      url: "https://tourismapi.herokuapp.com/users",
      headers: {
        "auth-token": token,
      },
    };
    try {
      let users = await axios.request(options);
      if (users.status != 200) {
        throw error("error");
      }
      dispatch(setUsers(users.data));
    } catch (error) {}
  };
  const handleLogout = () => {
    dispatch(delAdmin());
    navigate("/");
  };
  useEffect(() => {
    getCompras();
    getTour();
    getUsers();
  }, []);

  return (
    <nav className="navBar-container">
      <ul>
        <li><Button variant='light' >Visitar Site</Button></li>
        <li onClick={() => {
        handleLogout();
          }}
        ><Button variant="danger">Sair</Button></li>
        
      </ul>
    </nav>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delAdmin } from "../../reducer/adminReducer";
import { setCompras } from "../../reducer/comprasReducer";
import { setTour } from "../../reducer/tourReducer";
import { setUsers } from "../../reducer/usersReducer";
import axios from "axios";
import "./navBar.css";
import { Button } from "react-bootstrap";
import {
  RiUserFill,
  RiCheckboxCircleFill,
  RiStarFill,
  RiCoupon2Fill,
} from "react-icons/ri";
import Card from "../Card";
import AzulLogo from "../../../public/azul.png";
import PreLoader from '../../assets/Animations/PreLoader'

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const [ data, setData ] = useState()
  const [ showLoad, setShowLoad ] = useState(true)
  
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

  useEffect(() => {
    setData(state)
    setTimeout(() => {
      setShowLoad(!showLoad)
    }, [3000])
  }, [ state ])
    
  return (
    <>
      <nav className="navBar-container">
        <div className="navBar-align">
          <div className="navBar-logo">
            <img src={AzulLogo} alt="Logo da empresa Azul Tour" />
            <span>Administrativo</span>
          </div>
          <ul>
            <li>
              <Button variant="light">Visitar Site</Button>
            </li>
            <li
              onClick={() => {
                handleLogout();
              }}
            >
              <Button variant="danger">Sair</Button>
            </li>
          </ul>
        </div>
      </nav>
      {!showLoad ? (
        <header className="card-container-align">
          <Card
            value={data.compras.compras.length * 3}
            text="Total de Compras"
            icon={<RiCheckboxCircleFill />}
            onPress={() => navigate("/purchase")}
          />
          <Card
            value={data.users.users.length}
            text="Usuários Cadastrados"
            icon={<RiUserFill />}
            onPress={() => navigate("/users")}
          />
          <Card
            value={data.tour.tour.length}
            text="Passeios Disponíveis"
            icon={<RiCoupon2Fill />}
            onPress={() => navigate("/tour")}
          />
          <Card
            value={data.compras.compras.length * data.users.users.length}
            text="Avaliações de Usuário"
            icon={<RiStarFill />}
            onPress={() => navigate("/purchase")}
          />
        </header>
        ) : (<div style={{display: 'grid', placeContent: 'center'}}><PreLoader /></div>)
      }
    </>
  );
};

export default NavBar;

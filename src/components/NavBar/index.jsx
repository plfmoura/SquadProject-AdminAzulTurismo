import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delAdmin } from "../../reducer/adminReducer";
import { setCompras } from "../../reducer/comprasReducer";
import { setTour } from "../../reducer/tourReducer";
import { setUsers } from "../../reducer/usersReducer";
import { setDuvidas } from "../../reducer/duvidasReducer";
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
import { CardContext } from "../../context/CardContext";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const [ data, setData ] = useState()
  const [ showLoad, setShowLoad ] = useState(true)

  const { 
    CardBgColorPurchase,
    CardBgColorQuestions,
    CardBgColorTickets,
    CardBgColorUsers
  } = useContext(CardContext)
  
  let token = JSON.parse(localStorage.getItem("token_admin"));

  const getCompras = async () => {
    const options = {
      method: "GET",
      url: `${import.meta.env.VITE_BASE_URL}/compras`,
      headers: {
        "admin-token": token,
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
      url: `${import.meta.env.VITE_BASE_URL}/products`,
      headers: {
        "admin-token": token,
      },
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
      url: `${import.meta.env.VITE_BASE_URL}/users`,
      headers: {
        "admin-token": token,
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

  const getFAQ = async () => {
    const options = {
      method: "GET",
      url: `${import.meta.env.VITE_BASE_URL}/duvidas`,
      headers: {
        "admin-token": token,
      },
    };
    try {
      let duvidas = await axios.request(options);
      if (duvidas.status != 200) {
        throw error("error");
      }
      dispatch(setDuvidas(duvidas.data));
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
    getFAQ();
     setTimeout(() => {
      setShowLoad(!showLoad)
    }, [3000])
  }, []);

  useEffect(() => {
    setData(state)
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
              <Button variant="light" href="https://azul-turismo.vercel.app/" target="_blank">Visitar Site</Button>
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
            page={CardBgColorPurchase}
          />
          <Card
            value={data.users.users.length}
            text="Usuários Cadastrados"
            icon={<RiUserFill />}
            onPress={() => navigate("/users")}
            page={CardBgColorUsers}
          />
          <Card
            value={data.tour.tour.length}
            text="Passes Disponíveis"
            icon={<RiCoupon2Fill />}
            onPress={() => navigate("/tour")}
            page={CardBgColorTickets}
          />
          <Card
            value={data.duvidas.duvidas.length}
            text="Perguntas de Usuários"
            icon={<RiStarFill />}
            onPress={() => navigate("/faq")}
            page={CardBgColorQuestions}
          />
        </header>
        ) : (<div style={{display: 'grid', placeContent: 'center'}}><PreLoader /></div>)
      }
    </>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./users.css";
import { Button } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";
import UserCard from "./UserCard";
import PreLoader from "../../assets/Animations/PreLoader";

export default function Users() {
  const state = useSelector((state) => state);
  const [data, setData] = useState();
  const [showLoad, setShowLoad] = useState(false);

  useEffect(() => {
    setData(state.users);
    setTimeout(() => {
      setShowLoad(!showLoad);
    }, [3000]);
  }, [state]);

  useEffect(() => {}, []);
  return (
    <div className="Users-container">
      <header className="users-header">
        <div className="users-header-content">
          <h1>Usuários Cadastrados</h1>
          <div className="users-shotcuts">
            <span>Usuários mais recentes</span>
            <span>Usuários mais antigos</span>
          </div>
        </div>
        <div className="search-container">
          <input type="text" name="search" id="search" />
          <Button variant="primary">
            <RiSearchLine />
          </Button>
        </div>
      </header>
      <section className="users-content">
        {showLoad ? (
          data.users.map((item) => (
            <UserCard
              media={item.image_profile}
              userName={item.name}
              initialDate={item.tel1}
              located={item.located}
              purchaseAmount='0'
            />
          ))
        ) : (
          <div style={{ display: "grid", placeContent: "center" }}>
            <PreLoader />
          </div>
        )}
      </section>
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../reducer/usersReducer";
import axios from "axios";
import './users.css'
import { Button } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";

export default function Users() {
  const dispatch = useDispatch();

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
          <Button variant="primary"><RiSearchLine /></Button>
        </div>
      </header>
      <section className="users-content">

      </section>
    </div>
  );
}

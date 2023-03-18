import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../reducer/usersReducer";
import axios from "axios";

export default function Users() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

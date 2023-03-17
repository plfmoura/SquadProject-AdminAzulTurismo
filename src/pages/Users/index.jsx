import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../reducer/usersReducer";
import axios from "axios";

export default function Users() {
  const dispatch = useDispatch();
  const getUsers = async () => {
    const options = {
      method: "GET",
      url: "https://tourismapi.herokuapp.com/users",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6MSwibmFtZSI6Ikp1YW5waSIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjc4OTM2MDc3fQ.P0zvKKTe0uCuTsTsaIUrfF8vo9_VN1rpMG69tDbH_D8",
      },
    };
    try {
      let users = await axios.request(options);
      dispatch(setUsers(users.data));
    } catch (error) {}
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

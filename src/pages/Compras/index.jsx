import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCompras } from "../../reducer/comprasReducer";
import axios from "axios";

export default function Compras() {
  const dispatch = useDispatch();
  const getCompras = async () => {
    const options = {
      method: "GET",
      url: "https://tourismapi.herokuapp.com/compras",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6MSwibmFtZSI6Ikp1YW5waSIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjc4OTM2MDc3fQ.P0zvKKTe0uCuTsTsaIUrfF8vo9_VN1rpMG69tDbH_D8",
      },
    };
    try {
      let compras = await axios.request(options);
      if (compras.status != 200) {
        throw error("error");
      }
      dispatch(setCompras(compras.data));
    } catch (error) {}
  };
  useEffect(() => {
    getCompras();
  }, []);

  return (
    <div>
      <h1>Compras</h1>
    </div>
  );
}

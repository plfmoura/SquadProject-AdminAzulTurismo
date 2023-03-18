import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCompras } from "../../reducer/comprasReducer";
import axios from "axios";

export default function Purchase() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Compras</h1>
    </div>
  );
}

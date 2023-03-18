import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Compras from "./pages/Compras";
import Tour from "./pages/Tour";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { setAdmin } from "./reducer/adminReducer";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { admin } = state.admin;

  useEffect(() => {
    let admin = JSON.parse(localStorage.getItem("azul_admin"));
    if (admin) {
      dispatch(setAdmin(admin));
    }
  }, []);
  return (
    <>
      {!admin ? (
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </HashRouter>
      ) : (
        <HashRouter>
          <NavBar />
          <Routes>
            <Route exact path="/compras" element={<Compras />}></Route>
            <Route exact path="/tour" element={<Tour />}></Route>
            <Route exact path="/users" element={<Users />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </HashRouter>
      )}
      {/*Aqui o Footer*/}
    </>
  );
}

export default App;

import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { setAdmin } from "../../../reducer/adminReducer";
import PreLoader from "../../../assets/Animations/PreLoader";
import './formAuth.css'

function FormAuth() {
  const [ showPassword, setShowPassword ] = useState(false)
  const [ showContent, setShowContent ] = useState(true)
  const [ authStatus, setAuthStatus ] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSubmit = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    setShowContent(!showContent)
    const options = {
      method: "POST",
      url: "https://tourismapi.herokuapp.com/admin/login",
      headers: { "Content-Type": "application/json" },
      data: { email: email, password: password },
    };

    try {
      let response = await axios.request(options);
      if (response.status != 200) {
        throw new Error("login invalid");
      }
      dispatch(setAdmin(response.data.user));
      localStorage.setItem("azul_admin", JSON.stringify(response.data.user));
      localStorage.setItem("token_admin", JSON.stringify(response.data.token));
      navigate("/purchase");
    } catch (error) {
      setTimeout(() => {
        setShowContent(true)
        setAuthStatus('Dados cadastrais incorretos.')
      }, [3000])
      setTimeout(() => {
        setAuthStatus('')
      }, [10000])
    }
  };

  let formContainer = {
    width: '22rem',
    height: '22rem',
    boxShadow: '#33333330 0px 1px 5px .05rem',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: '#fff',
  }

  let formContent = {
    width: '70%',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  }

  return (
    <div style={ formContainer }>
      {!showContent ? (
        <div className="loader-container">
          <span>Efetuando Login</span>
          <PreLoader />
      </div>
      ) : (
        <Form onSubmit={(event) => HandleSubmit(event)} style={ formContent }>
          <Form.Group className="mb-3" >
            <Form.Label>Email Administrativo</Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Insira seu E-mail"
              id="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Senha de Administrador</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              required
              placeholder="insira sua Senha"
              id="password"
            />
            <div className="auth-status">
              <span >{authStatus}</span>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mostrar Senha" onClick={() => setShowPassword(!showPassword)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
        )
      }
    </div>
  );
}

export default FormAuth;

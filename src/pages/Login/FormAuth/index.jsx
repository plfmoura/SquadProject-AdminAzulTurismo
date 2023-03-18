import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";

function FormAuth() {
  const [ showPassword, setShowPassword ] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSubmit = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
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
      navigate("/compras");
    } catch (error) {
      console.log("error");
    }
  };

  let formContainer = {
    width: '25rem',
    height: '22rem',
    boxShadow: '#33333330 0px 1px 5px .05rem',
    display: 'grid',
    placeContent: 'center',
    borderRadius: '10px'
  }

  let formContent = {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  }

  return (
    <div style={ formContainer }>
      <Form onSubmit={(event) => HandleSubmit(event)} style={ formContent }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Administrativo</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Insira seu E-mail"
            id="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha de Administrador</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            required
            placeholder="insira sua Senha"
            id="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Mostrar Senha" onClick={() => setShowPassword(!showPassword)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </div>
  );
}

export default FormAuth;

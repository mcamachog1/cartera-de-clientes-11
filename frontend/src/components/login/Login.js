// frontend/src/componenets/login/Login.js
import React, { useState }  from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

function Login () {

	const [credenciales, setCredenciales] = useState( {username: "", password: ""});	

	const onChange = (event) => {
    setCredenciales({ ...credenciales, [event.target.name]: event.target.value });
  };

  const onLoginClick = () => {
    const userData = {
      username: credenciales.username,
      password: credenciales.password
    };
    console.log("Login " + userData.username + " " + userData.password);

		const login = async () =>{
      // PREGUNTAR PARA MEJORAR
      const api_route = "https://8000-mcamachog1-carteradecli-yrzhs1cplv9.ws-us82.gitpod.io/saludo-api"
			let response = await fetch(api_route,{
				headers:{
					"Content-Type":"application/json"
				},
				method:"POST",
        body: JSON.stringify(credenciales)

			})
			let data = await response.json()
			console.log('Voy a imprimir data')
      console.log(data)
      console.log(response.status)
      if (response.status === 201) {
        console.log('Ir a Dashboard')
        return(<Link to="/dashboard">Dashboard</Link>)
      }
	  }
    login()    


  };	

	return (
			<Container>
        <Row>
          <Col md="4">
            <h1>Login</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user email"
                  value={credenciales.username}
                  onChange={onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={credenciales.password}
                  onChange={onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button className="mt-2" color="primary" onClick={onLoginClick}>Login</Button>
            <p className="mt-2">
              Don't have account? <Link to="/signup">Signup</Link>
            </p>
          </Col>
        </Row>
			</Container>
	)
}

export default Login;

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { 
  Container,
	Button,
	Row,
	Col,
	Form,
	FormControl
} from 'react-bootstrap'

function Signup () {
	
	const [credenciales, setCredenciales] = useState( {username: "", password: ""});
  
	const onSignupClick = () => {
    const userData = {
      username: credenciales.username,
      password: credenciales.password
    };
    console.log("Sign up " + userData.username + " " + userData.password);		
  }

	const handleChange = (event) => {
		console.log('entro a cambio')
    setCredenciales({ ...credenciales, [event.target.name]: event.target.value });
  };

  return (
	<Container>
		<Row>
			<Col md="4">
				<h1>Sign up</h1>
				<Form>
					<Form.Group controlId="usernameId">
						<Form.Label>User name</Form.Label>
						<Form.Control
							type="text"
							name="username"
							placeholder="Enter user name"
							value={credenciales['username']}
							onChange={handleChange}
						/>
						<FormControl.Feedback type="invalid"></FormControl.Feedback>
					</Form.Group>

					<Form.Group controlId="passwordId">
						<Form.Label>Your password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							placeholder="Enter password"
							value={credenciales['password']}
							onChange={handleChange} 

						/>
						<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
					</Form.Group>
				</Form>
				<Button
					className="mt-2"
					color="primary"
					onClick={onSignupClick}  
				>Sign up</Button>
				<p className="mt-2">
					Already have account? <Link to="/login">Login</Link>
				</p>
			</Col>
		</Row>
	</Container>
  )
}

export default Signup;
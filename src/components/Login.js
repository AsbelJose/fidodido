import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';
import React, { useState } from 'react'
import { Button, Container, Stack, Form } from 'react-bootstrap'
import { auth } from '../firebase';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [ needRegister, setNeedRegister] = useState(false);

  const submitHandler = async (e) => { 
    e.preventDefault()
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;

    if (needRegister) {
      const newUser = await createUserWithEmailAndPassword(auth, email, password);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }

   };

  return (
    <Container>
      <Stack gap={3}>

        <h1>{ needRegister ? "Register" : "Login" }</h1>

        <Form onSubmit={ submitHandler }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            { needRegister ? "Register" : "Login" }
          </Button>
        </Form>

        <Button 
          variant='primary' 
          type='submit' 
          style={{ width: '300px'}}
          onClick={()=> signInWithRedirect(auth,googleProvider)}
          >
          Acceder con Google
        </Button>
        
        <Button 
          style={{ width: '300px'}}
          variant='primary' 
          onClick={()=> setNeedRegister(!needRegister) }>
          { needRegister ? "Ya tienes cuenta? Inicia Sesión" : "Registrarse" }
        </Button>

      </Stack>
    </Container>
  )
}

export default Login
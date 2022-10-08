import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { auth } from '../firebase';

const Home = () => {
  return (
    <Container>
      <h4>hola, sesión iniciada</h4>
      <Button onClick={()=> signOut(auth)}>Logout</Button>
    </Container>
  )
}

export default Home
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { auth } from '../firebase';
import AddRegister from './AddRegister';
import RegisterList from './RegisterList';

const Home = () => {

  const fakeData = [
    { id:1, description: "register 1", url: "https://picsum.photos/420" },
    { id:2, description: "register 2", url: "https://picsum.photos/420" },
    { id:3, description: "register 3", url: "https://picsum.photos/420" },
  ]

  

  return (
    <Container>
      <h4>hola, sesión iniciada</h4>
      <Button onClick={()=> signOut(auth)}>Logout</Button>
      <hr />
      <AddRegister />
      <RegisterList arrayRegisters={fakeData} />
      
    </Container>
  )
}

export default Home
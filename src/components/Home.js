import { signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { auth, db } from '../firebase';
import AddRegister from './AddRegister';
import RegisterList from './RegisterList';

const Home = ({ emailUser }) => {
  const [arrayRegister, setArrayRegister] = useState(null);
  const fakeData = [
    { id:1, description: "register 1", url: "https://picsum.photos/420" },
    { id:2, description: "register 2", url: "https://picsum.photos/420" },
    { id:3, description: "register 3", url: "https://picsum.photos/420" },
  ]

  const searchDocOrCreateDoc = async (idDocumento) => { 
    // referencia al documento
    const docuRef = doc(db, `usuarios/${idDocumento}`);
    //buscar documento
    const consulta = await getDoc(docuRef);
    // revisar si existe
    if (consulta.exists()) {
      // si si existe
      const infoDocu = consulta.data()
      return infoDocu.registers;
    } else {
      // si no existe -> creala
      await setDoc(docuRef, { registers: [...fakeData]});
      //revela la info de la consulta
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data()
      return infoDocu.registers;
    }
   };

   useEffect(() => {
     const fetchRegister = async() => {
      const registerFetch = await searchDocOrCreateDoc(emailUser);
      setArrayRegister(registerFetch);
     };
     
     fetchRegister();
   }, []);
   

  return (
    <Container>
      <h4>hola, sesión iniciada</h4>
      <Button onClick={()=> signOut(auth)}>Logout</Button>
      <hr />
      <AddRegister arrayRegisters={arrayRegister} setArrayRegister={setArrayRegister} emailUser={emailUser} />
      {
        arrayRegister ? <RegisterList arrayRegisters={arrayRegister} setArrayRegister={setArrayRegister} emailUser={emailUser} /> : null
      }
      
      
    </Container>
  )
}

export default Home
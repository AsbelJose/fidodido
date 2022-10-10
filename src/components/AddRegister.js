import React from 'react';
import {doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { db, storage } from '../firebase';


const AddRegister = ({ arrayRegisters, emailUser, setArrayRegister }) => {
  let urlDownload;
  
  const fileHandler = async (e) => {
    //detectar archivo
    const localFile = e.target.files[0];
    console.log(localFile);
    //cargarlo a firebase storage
    const fileRef = ref(storage, `documents/${localFile.name}`)
    await uploadBytes(fileRef, localFile);
    // //obtener url de descarga
    urlDownload = await getDownloadURL(fileRef);    
  };

  console.log(urlDownload);

  const addOther = async(e) => { 
    e.preventDefault();
    const description = e.target.formDescription.value;
    // crear nuevo array de registros
    const newArrayRegisters = [...arrayRegisters, { id: +new Date() , description: description  , url: urlDownload}]
    console.log(newArrayRegisters);
    //actualizar la db:
    const docuRef = doc(db, `usuarios/${emailUser}`);
    await updateDoc(docuRef, {registers: [...newArrayRegisters]});
    //actualizar estado:
    setArrayRegister(newArrayRegisters);
    //limpiar form
    e.target.formDescription.value = "";
   };
  
  

  return (
    <Container>
      <Form onSubmit={addOther}>
        <Row className='mb-5'>
          <Col>
            <Form.Control type="text" placeholder="Describe el registro" id="formDescription" />
          </Col>
          <Col>
            <Form.Control type="file" placeholder="Añade Archivo" onChange={fileHandler}/>
          </Col>
          <Col>
            <Button type="submit">Agregar Tarea</Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  )
}

export default AddRegister
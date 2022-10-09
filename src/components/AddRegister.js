import React from 'react';
import {doc, updateDoc } from 'firebase/firestore';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { db } from '../firebase';

const AddRegister = ({ arrayRegisters, emailUser, setArrayRegister }) => {
  
  const addOther = async(e) => { 
    e.preventDefault();
    const description = e.target.formDescription.value;
    // crear nuevo array de registros
    const newArrayRegisters = [...arrayRegisters, { id: +new Date() , description: description  , url: 'https://picsum.photos/420'}]
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
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Describe el registro" id="formDescription" />
          </Col>
          <Col>
            <Form.Control type="file" placeholder="Añade Archivo" />
          </Col>
          <Col>
            <Button type="submit">Agregar Tarea</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default AddRegister
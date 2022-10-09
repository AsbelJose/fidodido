import { updateDoc, doc } from 'firebase/firestore'
import React, { Fragment } from 'react'
import { Col, Container, Stack, Row, Button } from 'react-bootstrap'
import { db } from '../firebase'

const RegisterList = ({ arrayRegisters, emailUser, setArrayRegister }) => {

  const deleteRegister = async (idRegister) => {
    //crear nuevo array de tareas
    const newArrayRegisters = arrayRegisters.filter(
      (register) => register.id !== idRegister
      );
      //actualizar db
      const docuRef = doc(db, `usuarios/${emailUser}`);
      updateDoc(docuRef, {registers: [...newArrayRegisters]});
      //actualizar state
      setArrayRegister(newArrayRegisters);
    } 

  return (
    <Container>
      <Stack>
        {arrayRegisters.map((register)=> {
          return (
            <>
              <Row>
                <Col>{register.description}</Col>
                <Col>
                  <Button>Show Register</Button>
                </Col>
                <Col>
                  <Button onClick={()=> deleteRegister(register.id)}>Delete</Button>
                </Col>
              </Row>
              <hr />
            </>
          )
        })}
      </Stack>
    </Container>
  )
}

export default RegisterList
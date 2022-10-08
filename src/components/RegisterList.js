import React from 'react'
import { Col, Container, Stack, Row, Button } from 'react-bootstrap'

const RegisterList = ({ arrayRegisters }) => {
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
                  <Button>Delete</Button>
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
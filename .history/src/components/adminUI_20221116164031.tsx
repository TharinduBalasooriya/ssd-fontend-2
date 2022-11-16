import { useAuthContext } from '@asgardeo/auth-react';
import React from 'react'
import ButtonAppBar from "../components/ButtonAppBar"
import { Card, Button, Row, Col, Form } from 'react-bootstrap';


export default function AdminUI() {
  



  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div style={{ paddingRight: '150vh', paddingTop: '3vh' }}>
        <h1>Loged In As Admin</h1>
      </div>
      <Row>
        <Col>
          <div style={{paddingLeft:'10vh',paddingTop:'8vh'}}>

            <Card style={{ width: '35rem' }}>
              <br />


              <div style={{ paddingLeft: '12vh', paddingTop: '9vh', paddingBottom: '2vh', paddingRight: '2vh' }}>

                <Card.Img variant="top" src="https://media.tenor.com/Y0flR8fgl9sAAAAC/development-men.gif" style={{ width: '40vh' }} />
              </div>
            </Card>
          </div>

        </Col>
        <Col>
          <div className="d-grid gap-2" style={{ paddingTop: '15vh' }}>
            <Button variant="outline-primary" size="lg">
              <a href='/addmessage' style={{ textDecoration: 'none', color: 'black' }}>

                Add Message</a>
            </Button>
            <Button variant="outline-primary" size="lg">
              <a href='/viewmessage' style={{ textDecoration: 'none', color: 'black' }}>

                View All Messages      </a>

            </Button>
            <Button variant="outline-primary" size="lg">
              Add File
            </Button>
            <Button variant="outline-primary" size="lg">
              View All Files
            </Button>
           
          </div>
        </Col>

      </Row>

    </div>
  )
}

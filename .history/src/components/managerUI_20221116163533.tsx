import React from 'react'
import ButtonAppBar from './ButtonAppBar'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

export default function ManagerUI() {
    return (
        <div>
            <ButtonAppBar></ButtonAppBar>
            <div style={{paddingRight:'150vh',paddingTop:'3vh'}}>
            <h1>Logged As Manager </h1>
            </div>
            <Row>
        <Col>
          <div style={{paddingLeft:'10vh',paddingTop:'8vh'}}>

            <Card style={{ width: '35rem' }}>
              <br />


              <div style={{ paddingLeft: '12vh', paddingTop: '9vh', paddingBottom: '2vh', paddingRight: '2vh' }}>

                <Card.Img variant="top" src="https://cdn.dribbble.com/users/1107512/screenshots/3997677/_g.gif" style={{ width: '40vh' }} />
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
            <Button variant="outline-primary" size="lg" onClick={handleActivation}>
              Get Id token
            </Button>
          </div>
        </Col>

      </Row>
        </div>
    )
}

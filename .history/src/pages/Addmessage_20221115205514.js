import React, { useState } from "react"

import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";

export default function Addmessage() {
    const [title, settitle] = useState(" ");
    const [description, setdescription] = useState(" ");
    const [date, setdate] = useState(" ");

    function sendData(e) {

        e.preventDefault();

        const newUser = {
            title,
            description,
            date
        }

        axios.post("http://localhost:8070/message/", newUser).then(() => {
            ("User added")
            settitle('');
            setdescription('');
            setdate('');
            

            alert("Message added");
            window.location.reload();

        }).catch((err) => {
            alert("error");
        })
    }

    return (
        <div style={{ paddingTop: '7vh' }}>
            
        <Row>
        <Col>
        <div style={{ paddingLeft: '7vh',  paddingTop: '2vh', paddingBottom: '2vh' }}>

        <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://cdn-aonfa.nitrocdn.com/tajHzjeZJUHiWEpwdnLMRomLAgtzGczy/assets/static/optimized/rev-0589e04/wp-content/uploads/Email-Gif.gif" />
    </Card>
    </div>
        </Col>
        <Col>
        <div style={{  paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                <Card >
                    <div style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                        <Card >
                            <Card.Body>
                                <div style={{ paddingLeft: '4vh' }}>
                                    <h6 > Add Message</h6>

                                </div>

                                <Form onSubmit={sendData}>

                                    <br />
                                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh' }}>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label style={{ color: 'white' }}>Title : </Form.Label>
                                            <Form.Control type="text"
                                                onChange={(e) => settitle(e.target.value)}

                                                placeholder=" Enter Title" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label style={{ color: 'white' }}>Description : </Form.Label>
                                            <Form.Control type="text" as="textarea" rows={3}
                                                onChange={(e) => setdescription(e.target.value)}

                                                placeholder=" Enter Description"  />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label style={{ color: 'white' }}>Date :</Form.Label>
                                            <Form.Control type="date"
                                                onChange={(e) => setdate(e.target.value)}
                                                placeholder="Select Date" />
                                        </Form.Group>

                                        
                                    </div>

                                    <br />



                                    <div >
                                        <Button type="submit" variant="outline-dark" size="lg">ADD</Button>
                                    </div>
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>
                </Card>
            </div>  
        
        </Col>
        </Row>
           


        </div>
    );
}
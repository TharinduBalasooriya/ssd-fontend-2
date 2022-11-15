import React, { useState, useEffect } from "react";

import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";

export default function Viewsinglemessage() {

    const id = localStorage.getItem('id');
    console.log(id);
    const [message, setmessage] = useState([]);

    useEffect(() => {

        //get funtion
        function getmessage() {
            axios.get(`http://localhost:8070/message/${id}`).then((res) => {
                console.log(res.data.title);
                setmessage(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getmessage();
    }, [])

    function onDelete() {
        axois.delete(`http://localhost:8070/message/${id}`).then((res) => {
            alert('Deleted Successfully');
            window.location='/viewmessage'
        }).catch((err) => {
            alert(err.message);
        })
      }
    return (
        <div style={{ paddingTop: '6vh' }}>
            <h1>View Single Message</h1>
            <Row>
            <Col>
                    <div style={{ paddingRight: '2vh',paddingLeft:'5vh', paddingTop: '10vh', paddingBottom: '2vh' }}>
                        <Card >
                            <div style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                                <Card >
                                    <Card.Body>
                                        <div style={{ paddingLeft: '4vh' }}>
                                            <h3 > Message</h3>
                                        </div><br/>
                                        <div style={{ paddingLeft: '15vh' }}>
                                            <h5 > Date : {message.date}</h5><br/>
                                            <h5 > Title : {message.title}</h5><br/>
                                            <h5 > Description : {message.description}</h5><br/>

                                        </div>
                                        <div style={{ paddingLeft: '107vh' }}>
                                                <Button variant="outline-danger"   href='/viewsinglemessage' onClick={() => onDelete()}  >View Message</Button>
                                            </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Card>
                    </div>

                </Col>
                <Col>
                    <div style={{ paddingLeft: '7vh', paddingTop: '2vh', paddingBottom: '2vh' }}>

                        <Card style={{ width: '40rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/5f/92/96/5f9296f0364ebfdb00b594fe368768ab.gif" />
                        </Card>
                    </div>
                </Col>
                
            </Row>

        </div>
    );
}
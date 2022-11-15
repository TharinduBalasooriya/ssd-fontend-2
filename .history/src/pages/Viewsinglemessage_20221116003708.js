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
                console.log(res.data);
                setmessage(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getmessage();
    }, [])
    return (
        <div style={{ paddingTop: '6vh' }}>
            <h1>View Messages</h1>
            <h2>ssss</h2>
            <Row>
                <Col>
                    <div style={{ paddingLeft: '7vh', paddingTop: '2vh', paddingBottom: '2vh' }}>

                        <Card style={{ width: '40rem' }}>
                            <Card.Img variant="top" src="https://cdn-aonfa.nitrocdn.com/tajHzjeZJUHiWEpwdnLMRomLAgtzGczy/assets/static/optimized/rev-0589e04/wp-content/uploads/Email-Gif.gif" />
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div style={{ paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                        <Card >
                            <div style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                                <Card >
                                    <Card.Body>
                                        <div style={{ paddingLeft: '4vh' }}>
                                            <h6 > View Message</h6>
                                        </div>

                                        

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
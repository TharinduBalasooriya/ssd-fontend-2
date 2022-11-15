import React, { useState, useEffect } from "react";

import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";

export default function Viewmessages() {
  
    const [message, setmessage] = useState([]);

    useEffect(() => {

        //get funtion
        function getmessage() {
            axios.get("http://localhost:8070/message/").then((res) => {
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getmessage();
    }, [])

    return (
        <div style={{ paddingTop: '7vh' }}>
            <h1>Hello</h1>
                    <div style={{ paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                            <div style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                                <Card >
                                    <Card.Body>
                                        <div style={{ paddingLeft: '4vh' }}>
                                            <h6 > Date : </h6>
                                            <Button variant="outline-dark">View Message</Button>
                                        </div>                                      
                                    </Card.Body>
                                </Card>
                            </div>
                    </div>

            
        </div>
    );
}
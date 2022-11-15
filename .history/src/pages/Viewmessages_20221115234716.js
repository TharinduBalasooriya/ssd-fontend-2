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
                setmessage(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getmessage();
    }, [])

    return (
        <div style={{ paddingTop: '6vh' }}>
            <h1>All Messages</h1>
            <div style={{ paddingRight: '2vh', paddingTop: '1vh', paddingBottom: '2vh' }}>
                <div style={{ paddingLeft: '7vh', paddingRight: '2vh', paddingTop: '1vh', paddingBottom: '2vh' }}>

                    {message.map((Message) => {
                        return (
                            <div>
                                <Card style={{ width: '97rem' }}>
                                    <Card.Body>
                                        <div >
                                            <div style={{ paddingRight: '107vh' }}>
                                                <h6 > Date : {Message.date}</h6>
                                            </div>
                                            <div style={{ paddingLeft: '107vh' }}>
                                                <Button variant="outline-dark"  href={`/viewsinglemessage/${Message.date}`} >View Message</Button>
                                            </div>

                                        </div>
                                    </Card.Body>
                                </Card>   <br />

                            </div>
                        );
                    })}



                </div>
            </div>


        </div>
    );
}
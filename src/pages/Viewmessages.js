import React, { useState, useEffect } from "react";

import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
import { Hooks, useAuthContext } from "@asgardeo/auth-react";
import ButtonAppBar from "../components/ButtonAppBar"

export default function Viewmessages() {
    const {

        getAccessToken

    } = useAuthContext();

    const [message, setmessage] = useState([]);

    useEffect(() => {

        let user = JSON.parse(localStorage.getItem("currentUser"));
        let userId = user.userID;

        //get funtion
        let getmessage = async () => {

            let token = await getAccessToken();
            axios.get("https://localhost:8070/message/getByUser/" + userId, {
                headers: {
                    'token': `${token}`
                }
            }).then((res) => {
                console.log(res.data);
                setmessage(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getmessage();
    }, [])

    return (
        <div >
            <ButtonAppBar></ButtonAppBar>
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
                                                    <Button variant="outline-dark" href='/viewsinglemessage' onClick={() => localStorage.setItem('id', Message._id)} >View Message</Button>
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

        </div>

    );
}
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
        <div style={{ paddingTop: '7vh' }}>
            <h1>All Messages</h1>
                    <div style={{ paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                            <div style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                               
                              {message.map((Message)=>{
                                return(
                                    <div>
                                     <Card style={{ width: '98rem' }}>
                                    <Card.Body>
                                        <div >
                                            <div style={{ paddingRight: '97vh' }}>
                                            <h6 > Date : {Message.date}</h6>
                                            </div>
                                           <div style={{ paddingLeft: '107vh' }}>
                                           <Button variant="outline-dark">View Message</Button>
                                           </div>

                                        </div>                                      
                                    </Card.Body>
                                </Card>   <br/>
                                    
                                    </div>
                                );
                              })} 
                                


                            </div>
                    </div>

            
        </div>
    );
}
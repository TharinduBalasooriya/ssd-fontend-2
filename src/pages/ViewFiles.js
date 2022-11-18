import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";

export default function ViewFiles() {
  
    const [file, setfile] = useState([]);

    useEffect(() => {

        //get funtion
        function getfile() {
            axios.get("http://localhost:8070/file/").then((res) => {
                console.log(res.data);
                setfile(res.data);
            }).catch((err) => {
                alert(err.file);
            })
        }
        getfile();
    }, [])

    return (
        <div style={{ paddingTop: '6vh' }}>
            <h1>All Files</h1>
                    <div style={{ paddingRight: '2vh', paddingTop: '1vh', paddingBottom: '2vh' }}>
                            <div style={{ paddingLeft: '7vh', paddingRight: '2vh', paddingTop: '1vh', paddingBottom: '2vh' }}>
                               
                              {file.map((file)=>{
                                return(
                                    <div>
                                     <Card style={{ width: '97rem' }}>
                                    <Card.Body>
                                        <div >
                                            <div style={{ paddingRight: '107vh' }}>
                                            <h6 > File Name : {file.title}</h6>
                                            <h6 > Date : {file.date}</h6>
                                      
                                            <Link to={file.file} target="_blank" download>Download</Link>
                                            </div>
                                           <div style={{ paddingLeft: '107vh' }}>
                                           <Button variant="outline-dark"><a href={file.file}>View file</a></Button>
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
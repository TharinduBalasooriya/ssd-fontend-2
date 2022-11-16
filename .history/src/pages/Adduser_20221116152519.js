import React, { useState } from "react"

import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";

export default function Adduser() {
    const [givenname, setgivenname] = useState(" ");
    const [familyname, setfamilyname] = useState(" ");
    const [username, setusername] = useState(" ");
    const [password, setpassword] = useState(" ");
    const [type, settype] = useState(" ");
    const [value, setvalue] = useState(" ");
    const [role, setrole] = useState(" ");

    function sendData(e) {

        e.preventDefault();

        const newUser = {

            "data": {
                "name": {
                    "givenName": `${givenname}`,
                    "familyName": `${familyname}`
                },
                "userName": `default/${username}`,
                "password": `${password}`,
                "emails": [
                    {
                        "type": `${type}`,
                        "value": `${value}`,
                        "primary": "true"
                    }
                ]
            },
            "role": `${role}`

        }

        console.log(newUser)
        axios.post("http://localhost:8070/user/", newUser).then(() => {
            ("User added")
            setgivenname('');
            setfamilyname('');
            setusername('');
            setpassword('');
            settype('');
            setvalue('');
            setrole('');
            alert("User added");
            window.location = '/'

        }).catch((err) => {
            alert("error");
        })
    }

    return (
        <div style={{ paddingTop: '7vh' }}>
            <h2> <-- Back </h2>
            <Row>
                <Col>
                    <div style={{ paddingLeft: '7vh', paddingTop: '9vh', paddingBottom: '2vh' }}>

                        <Card style={{ width: '35rem' }}>
                            <br/>
                            <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>
                            <h3>Register to System :</h3>
                            </div>

                            <div style={{ paddingLeft: '12vh', paddingTop: '2vh', paddingBottom: '2vh' ,paddingRight:'2vh'}}>

                            <Card.Img variant="top" src="https://www.pngkit.com/png/full/824-8246267_time-left-user-icon-round-png.png" style={{width:'40vh'}} />
                        </div>
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
                                            <h6 > Add User</h6>

                                        </div>

                                        <Form onSubmit={sendData}>

                                            <br />
                                            <div style={{ paddingLeft: '5vh', paddingRight: '5vh' }}>
                                                <Row>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label >Given Name : </Form.Label>
                                                            <Form.Control type="text"
                                                                onChange={(e) => setgivenname(e.target.value)}
                                                                placeholder=" Given Name" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label >Family Name : </Form.Label>
                                                            <Form.Control type="text"
                                                                onChange={(e) => setfamilyname(e.target.value)}
                                                                placeholder=" Family Name" />
                                                        </Form.Group>
                                                    </Col>

                                                </Row>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label >Username :</Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={(e) => setusername(e.target.value)}
                                                        placeholder="Username" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label >Password :</Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={(e) => setpassword(e.target.value)}
                                                        placeholder="Password" />
                                                </Form.Group>
                                                <Form.Label >Email :</Form.Label>

                                                <Row>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label >Email Type :</Form.Label>
                                                            <Form.Select aria-label="Default select example"
                                                        onChange={(e) => settype(e.target.value)}>
                                                        <option>Select Type</option>
                                                        <option value="home">home</option>
                                                        <option value="office">office</option>
                                                    </Form.Select>
                                                            
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label >Email :</Form.Label>
                                                            <Form.Control type="email"
                                                                onChange={(e) => setvalue(e.target.value)}
                                                                placeholder="Email" />
                                                        </Form.Group>


                                                    </Col>
                                                </Row>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label >Role :</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={(e) => setrole(e.target.value)}>
                                                        <option>Select Role</option>
                                                        <option value="managers">managers</option>
                                                        <option value="admin">admin</option>
                                                        <option value="employee">employee</option>
                                                    </Form.Select>
                                                    </Form.Group>

                                            </div>

                                            <br />

                                            <div style={{ paddingLeft: '85%' }}>
                                                <Button type="submit" variant="outline-dark" >ADD</Button>
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
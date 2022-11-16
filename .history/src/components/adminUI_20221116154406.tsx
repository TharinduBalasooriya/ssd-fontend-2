import { useAuthContext } from '@asgardeo/auth-react';
import React from 'react'
import Addmessage from "../pages/Addmessage";
import ButtonAppBar from "../components/ButtonAppBar"
import { Card, Button, Row, Col, Form } from 'react-bootstrap';


export default function AdminUI() {
  const {
    state,
    signIn,
    signOut,
    getBasicUserInfo,
    getIDToken,
    getDecodedIDToken,
    getAccessToken,
    on
} = useAuthContext();

let handleActivation = async ()=>{
  let accessToken = await getAccessToken();
  console.log(accessToken)
}

  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
       <div style={{paddingRight:'150vh',paddingTop:'3vh'}}>
       <h1>Loged In As Admin</h1>
       </div>
      <Row>
      <Col>
      
      </Col>
      <Col>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Add Message
      </Button>
      <Button variant="secondary" size="lg">
        View All Messages
      </Button>
      <Button variant="secondary" size="lg">
        Add File
      </Button>
      <Button variant="secondary" size="lg">
      View All Files  
    </Button>
    </div>
      </Col>

      </Row>
        <button onClick={handleActivation}>
          Get Id token
        </button>
    </div>
  )
}
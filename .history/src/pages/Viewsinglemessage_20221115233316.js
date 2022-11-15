import React, { useState, useEffect } from "react";

import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Viewsinglemessage() {
  
   const location=useLocation();
   console.log(location);

    return (
        <div style={{ paddingTop: '6vh' }}>
            <h1>All Messages</h1>
              <h2>User :{location.state.key}</h2>  

            
        </div>
    );
}
import React, { useState, useEffect } from "react";

import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Viewsinglemessage() {
  
   const location=useLocation();
   console.log(location);
   console.log(location.state.id);

    return (
        <div style={{ paddingTop: '6vh' }}>
            <h1>All Messages</h1>
                

            
        </div>
    );
}
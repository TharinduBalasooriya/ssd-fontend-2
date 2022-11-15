import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
export default function Viewsinglemessage() {
    let params = useParams();

    const id=params.id;
console.log('hh');
console.log(id);

    return (
        <div style={{ paddingTop: '6vh' }}>
            <h1>All Messages</h1>

            
        </div>
    );
}
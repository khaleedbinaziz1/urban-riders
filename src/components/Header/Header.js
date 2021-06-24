import React from 'react';
import './Header.css'
import logo from '././../../images/Urban Riders.png'
import { Col, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Header = () => {
    return (
        <Container className="header">
            <Row>
                <Col md="4" className="logo">
                    <Link to="/home"><img src={logo} alt="" /></Link>
                </Col>
                <Col md="4" className="navigation">
                    <Link to="/home">Home</Link>
                    <Link to="/destination">Destination</Link>


                </Col>
                <Col md="3" className="navigation">
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </Col>
                <Col md="1" className="login-btn">
                <Link   to="/login">Login</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
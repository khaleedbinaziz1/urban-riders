import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css'
import bike from '../../images/Frame.png'
import bus from '../../images/Frame-1.png'
import car from '../../images/Frame-2.png'
import train from '../../images/Group.png'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <Container fluid className="home-section">
            <Row>
                <Col>
                    <Link to={`/destination`}>
                        <div className="card">
                            <img src={bike} alt="" />
                            <h2>Bike</h2>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to={`/destination`}>
                        <div className="card">
                            <img src={car} alt="" />
                            <h2>Car</h2>
                        </div>
                    </Link>

                </Col>
                <Col>
                    <Link to={`/destination`}>
                        <div className="card">
                            <img src={bus} alt="" />
                            <h2>Bus</h2>
                        </div>
                    </Link>

                </Col>
                <Col>
                    <Link to={`/destination`}>
                        <div className="card">
                            <img src={train} alt="" />
                            <h2>Train</h2>
                        </div>
                    </Link>

                </Col>

            </Row>
        </Container>
    );
};
export default Home;
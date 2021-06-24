import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Destination.css'
import destImg from '../../images/Map.png'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));



   
    const Destination = () => {
        const classes = useStyles();
        return (
            <Container>
                <Row>
                    <Col md="4">
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField label="Pick up from" id="filled-size-small" defaultValue="" variant="filled" size="small"/>
                                <TextField label="Drop to" id="filled-size-small" defaultValue="" variant="filled" size="small" />
                            </div>
                            <button type="submit" className="submit-btn"variant="contained" color="primary"> Submit</button>
                        </form>
                    </Col>
                    <Col md="8">
                        <img className="destImg" src={destImg} alt="" />
                    </Col>
                </Row>
            </Container>
        );
    };

    export default Destination;
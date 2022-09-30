import React from "react";
import { Container, Col, Row, Table, FormGroup, Form, Card, Button } from "react-bootstrap";
import './datosUsuario.scss'

import { Navigate } from 'react-router'







export default class DatosUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonDatos: [],
            redirect: null,
            usuario: ''

        }
    }

    componentWillMount() {

        console.log('holaa')

        console.log('datos: ', this.props.jsonDatosUsuario['items'])

        this.setState({ jsonDatos: this.props.jsonDatosUsuario.items })

    }

    verRepositorios(user){
        this.setState({ redirect: '/repositorios', usuario: user })
    }

    render() {

        if (this.state.redirect) {
            return <Navigate to={`repositorios/user=${this.state.usuario}`} />
        }








        return (
            <Container className='container'>
                <Row>



                    {this.state.jsonDatos.map((data, index) => (


                        <Col lg={3} md={4} xs={6} style={{ marginTop: '15px' }} >

                            <Card key = {index}>
                                <a href = {data.html_url} target = '_blank'>
                                <Card.Img variant="top" src={data.avatar_url} />
                                </a>
                                <Card.Body>
                                    <Card.Title>{data.login} {data.cantidad}</Card.Title>
                                    <Button variant="primary" onClick = {()=> this.verRepositorios(data.login)} style = {{marginTop: '5.5px'}}>Repositorios</Button>
                                </Card.Body>
                            </Card>

                        </Col>



                    ))}


                </Row>








            </Container>
        )
    }


}
import React from "react";
import { Container, Col, Row, Table, Pagination, FormGroup, Form } from "react-bootstrap";


import { Avatar } from 'primereact/avatar';

import './datosUsuario.scss'


export default class DatosUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonDatos: ''

        }
    }

    componentDidMount(){

        this.setState({ jsonDatos: this.props.jsonDatosUsuario })

    }

    render() {
        return (
            <Container className='container'>
                <Col>
                <Row>
                Usuario encontrado: {this.state.jsonDatos.login}
                </Row>
                
                <Row>
                <img src = {this.state.jsonDatos.avatar_url} className='avatar'/>
                </Row>
                </Col>

            </Container>
        )
    }


}
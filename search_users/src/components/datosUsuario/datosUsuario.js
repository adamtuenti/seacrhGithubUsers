import React from "react";
import { Container, Col, Row, Table, Pagination, FormGroup, Form } from "react-bootstrap";


import { Avatar } from 'primereact/avatar';

import './datosUsuario.scss'


export default class DatosUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonDatos: []

        }
    }

    componentDidMount() {

        console.log('holaa')

        console.log('datos: ', this.props.jsonDatosUsuario['items'])

        this.setState({ jsonDatos: this.props.jsonDatosUsuario.items })

    }

    render() {
        return (
            <Container className='container'>
                <Col>

                    {this.state.jsonDatos.map(data => (

                        <Row>
                            <Row>
                                Usuario encontrado: {data.login}
                            </Row>

                            <Row>
                                <img src={data.avatar_url} className='avatar' />
                            </Row>

                        </Row>

                    ))}


                </Col>

            </Container>
        )
    }


}
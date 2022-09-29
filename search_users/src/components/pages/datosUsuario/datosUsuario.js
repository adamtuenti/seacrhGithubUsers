import React from "react";
import { Container, Col, Row, Table, FormGroup, Form, Card, Button } from "react-bootstrap";


import { Avatar } from 'primereact/avatar';

import './datosUsuario.scss'

import { Navigate } from 'react-router'



import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";



/* import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from "react-bs-datatable"; */


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
            return <Navigate to={`repositorios/${this.state.usuario}`} />
        }




        const STORY_HEADERS = [

            {
                prop: "avatar_url",
                title: "Imagen",
                cell: (row) => {
                    return (
                        <div>

                            <img className='img-fluid' style={{ width: '45px', heigth: '45px' }} src={row.avatar_url} />
                        </div>
                    );
                }

            },
            {
                prop: "login",
                title: "Defensa",
                isSortable: true
            },
            {
                prop: '',
                cell: (row) => {
                    return (
                        <div>
                            <button>Editar</button>


                        </div>
                    );
                }


                //isSortable: true
            }
        ];




        return (
            <Container className='container'>
                <Row>



                    {this.state.jsonDatos.map(data => (


                        <Col lg={3} md={4} xs={6} style={{ marginTop: '15px' }} >

                            <Card >
                                <Card.Img variant="top" src={data.avatar_url} />
                                <Card.Body>
                                    <Card.Title>{data.login}</Card.Title>
                                    {/* <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est
                                    </Card.Text> */}
                                    <Button variant="primary" onClick = {()=> this.verRepositorios(data.login)}>Buscar repositorios</Button>
                                </Card.Body>
                            </Card>

                            {/* <div id='divCard' style={{ border: 'solid 1px black', borderColor: 'black', borderRadius: '15px', paddingTop: '15px', paddingBottom: '15px' }}>



                                <Row style={{ textAlign: 'center' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <p>
                                            {data.login}
                                        </p>

                                    </div>

                                </Row>

                                <Row>
                                    <img className='img-fluid' src={data.avatar_url} className='avatar' />
                                </Row>

                            </div> */}
                        </Col>



                    ))}


                </Row>








            </Container>
        )
    }


}
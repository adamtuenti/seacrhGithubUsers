import React from "react";
import { Container, Col, Row, Table, FormGroup, Form } from "react-bootstrap";


import { Avatar } from 'primereact/avatar';

import './datosUsuario.scss'



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
            jsonDatos: []

        }
    }

    componentWillMount() {

        console.log('holaa')

        console.log('datos: ', this.props.jsonDatosUsuario['items'])

        this.setState({ jsonDatos: this.props.jsonDatosUsuario.items })

    }

    render() {




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
                {/*  <Col>

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


                </Col> */}




                <DatatableWrapper
                    body={this.state.jsonDatos}
                    headers={STORY_HEADERS}
                    paginationOptionsProps={{
                        initialState: {
                            rowsPerPage: 10,
                            rowsPerPage: 5,
                            options: [5, 10, 15, 20]
                        }
                    }}
                >

                    <Row className="mb-4 p-2">
                        <Col
                            xs={12}
                            lg={4}
                            className="d-flex flex-col justify-content-end align-items-end"
                        >
                            <Filter />
                        </Col>
                        <Col
                            xs={12}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
                        >
                            <PaginationOptions />
                        </Col>
                        <Col
                            xs={12}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-end align-items-end"
                        >
                            <Pagination />
                        </Col>
                    </Row>
                    <Table>
                        <TableHeader />
                        <TableBody />
                    </Table>
                </DatatableWrapper>



            </Container>
        )
    }


}
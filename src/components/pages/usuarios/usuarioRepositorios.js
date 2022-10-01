import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import { getRepositoriesByUser } from "../../../services/api";




export default function RepositoriosUsuario(){

    const [ repositorios, setRepositorios ] = useState([])
    const {user} = useParams()
    const STORY_HEADERS = [

        {
            prop: "name",
            title: "Nombre",
            isSortable: true
        },
        {
            prop: "language",
            title: "Lenguaje",
        },
        {
            prop: "watchers",
            title: "Vistas",
        },
    ];



    useEffect(() => {

        if(repositorios.length === 0){

            getRepositoriesByUser(user).then((data) => {

                        /* this.setState({ mostrarDatos: true, repositorios: data }) */
                setRepositorios(data)

            })
        }
    })

    const Title = styled.p`
        font-size: 35px;
        text-align: center;
        font-weight: bold;
        @media (max-width: 1000px) {
            font-size: 22.5px !important
        
        }
    `;

        
        return (
            <Container id='container'>
                <Row>
                    <Title>Repositorios de {user}</Title>
                </Row>




                <DatatableWrapper
                    body={repositorios}
                    headers={STORY_HEADERS}
                    paginationOptionsProps={{
                        initialState: {
                            rowsPerPage: 10,
                            options: [5, 10, 15, 20]
                        }
                    }}
                >

                    <Row className="mb-4 p-2">
                        <Col
                            xs={8}
                            lg={4}
                            className="d-flex flex-col justify-content-end align-items-end"
                        >
                            <Filter />
                        </Col>
                        <Col
                            xs={8}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-lg-start align-items-center justify-content-sm-start mb-2 mb-sm-0"
                        >
                            <PaginationOptions />
                        </Col>
                        <Col
                            xs={6}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-center align-items-center"
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
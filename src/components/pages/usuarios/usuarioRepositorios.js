import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { DatatableWrapper, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import { getRepositoriesByUser } from "../../../services/api";
import useUser from "../../../hooks/useUser"

export default function RepositoriosUsuario(){

    const [ repositorios, setRepositorios ] = useState([])
    const [loading, setLoading] = useState(true)
    const {user} = useParams()
    const { Title, ImageNoRepo } = useUser()
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

                setTimeout(() => {
                    setLoading(false)
                }, 750);
                setRepositorios(data)
            })
        }
    })

        
    return (
        <Container id='container'>
            <Row>
                <Title>Repositorios de {user}</Title>
            </Row>
            <div id = 'divIcon'>
                <Link to = {`/perfil/${user}`}>
                    <BsFillArrowLeftCircleFill size = '42' style = {{textAlign: 'left'}}/>
                </Link>
            </div>

            {!loading &&
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

                    <Table>
                        <TableHeader />
                        <TableBody />
                    </Table>


                    <Row className="mb-4 p-2">
                        <Col
                            xs={5}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-lg-start align-items-center justify-content-sm-start mb-2 mb-sm-0"
                        >
                            <PaginationOptions />
                        </Col>
                        <Col
                            xs={9}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-center align-items-center"
                        >
                            <Pagination />
                        </Col>
                    </Row>
                    
                </DatatableWrapper>
            }
            {loading &&
                <div>
                    <ImageNoRepo src = 'https://octodex.github.com/images/daftpunktocat-thomas.gif' className = 'img-fluid'/>
                </div>
            }

        </Container>
    )


}
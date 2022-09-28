import React from "react";
import { Container, Col, Row, Table, Pagination } from "react-bootstrap";
import { getInfoByUser } from "../../services/api";



export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemones: [],
            crearPokemon: false,
            labelFilter: '',
            accion: '',
            idPokemon: '',
            page: 1,
            slice: [],
            rows: 5

        }
    }

    render() {
        return (
            <Container className = ''>
                <Row>
                    Diseño
                </Row>


                <Col>
                    <Row>
                        Ingrese usuario
                    </Row>

                    <Row>
                        Busqueda
                    </Row>
                </Col>

            </Container>
        )
    }


}
import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import styled from 'styled-components'

import '../../styles/styles.scss'

import { Link } from "react-router-dom";


export default function UsuariosHook({jsonDatosUsuario}) {

    const Title = styled.p`
        font-size: 1.25em;
        text-align: center;
        font-weight: bold
    `;

        return (
            <Container id='container'>
                <Row>
                    {jsonDatosUsuario.map((data, index) => (
                        <Col lg={3} md={4} xs={9} style={{ marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }} >

                            <Link to = {`/perfil/${data.login}`}>
                                <Card key = {index}>
                                    <Card.Img variant="top" src={data.avatar_url} />
                                    <Card.Body>
                                        <Title>{data.login}</Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                    ))}
                </Row>

            </Container>
        )

}
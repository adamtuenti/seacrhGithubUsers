import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { GoPerson } from 'react-icons/go'
import '../../styles/styles.scss'



export default function RepositoriosHook({jsonDatosRepo}) {
        return (
            <Container id='container'>
                <Row>
                    {jsonDatosRepo.map((data, index) => (
                        <Col lg={3} md={4} xs={10} style={{ marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }} >
                            <a href = {data.html_url} target = '_blank' style = {{textDecoration: 'none', color: 'black'}} rel = 'noreferrer'>
                                <Card key = {index}>
                                    <Card.Header>{data.name.length < 22 ? data.name : data.name.slice(0,22) + '...'}</Card.Header>
                                    <Card.Img variant="top" src={data['owner'].avatar_url === '' ? 'https://cdn-icons-png.flaticon.com/512/219/219983.png' : data['owner'].avatar_url}/>
                                    <Card.Body>
                                        <p><GoPerson style = {{marginRight: '5.5px'}}/>{data['owner'].login}</p>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        )

}
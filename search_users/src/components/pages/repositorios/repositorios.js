import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

import { GoPerson } from 'react-icons/go'






export default function RepositoriosHook({jsonDatosRepo}) {

    

    useEffect(() => {
        console.log('aca');
        console.log(jsonDatosRepo)

        //setJsonDatos(props.jsonDatosRepo['items'])

})







        return (
            <Container className='container'>
                <Row>



                    {jsonDatosRepo.map((data, index) => (


                        <Col lg={3} md={4} xs={10} style={{ marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }} >

                            <Card key = {index}>
                            <Card.Header>{data.name.length < 25 ? data.name : data.name.slice(0,25) + '...'}</Card.Header>
                            <Card.Img variant="top" src={data['owner'].avatar_url === '' ? 'https://cdn-icons-png.flaticon.com/512/219/219983.png' : data['owner'].avatar_url}/>
                                <Card.Body>
                                    <p><GoPerson style = {{marginRight: '5.5px'}}/>{data['owner'].login}</p>
                                </Card.Body>
                            </Card>

                        </Col>



                    ))}


                </Row>








            </Container>
        )



}
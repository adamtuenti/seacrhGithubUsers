import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";



import './usuarios.scss'

import { Link, useParams } from "react-router-dom";







export default function UsuariosHook({jsonDatosUsuario}) {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         jsonDatos: [],
    //         redirect: null,
    //         usuario: ''

    //     }
    // }

    // componentWillMount() {

    //     console.log('holaa')

    //     console.log('datos: ', this.props.jsonDatosUsuario['items'])

    //     this.setState({ jsonDatos: this.props.jsonDatosUsuario.items })

    // }

    const verRepositorios = (user) =>{
        //this.setState({ redirect: '/perfil', usuario: user })
    }


        // if (this.state.redirect) {
        //     return <Navigate to={`perfil/${this.state.usuario}`} />
        // }








        return (
            <Container className='container'>
                <Row>



                    {jsonDatosUsuario.map((data, index) => (


                        <Col lg={3} md={4} xs={9} style={{ marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }} >

                            <Link to = {`/perfil/${data.login}`}>

                            <Card key = {index}>
                                <Card.Img variant="top" src={data.avatar_url} />
                                <Card.Body>
                                    <Card.Title>{data.login}</Card.Title>
                                    {/* <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est
                                    </Card.Text> */}
                                    <Button variant="primary" style = {{marginTop: '5.5px'}}>Ver perfil</Button>
                                </Card.Body>
                            </Card>

                            </Link>

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
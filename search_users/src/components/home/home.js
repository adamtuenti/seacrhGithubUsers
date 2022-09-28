import React from "react";
import { Container, Col, Row, Table, Pagination, FormGroup, Form } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import DatosUsuario from '../datosUsuario/datosUsuario'
import { getInfoByUser } from "../../services/api";
import github from '../../assets/github.png'
import './home.scss'





export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            mostrarDatos: false,
            jsonDatosUsuario: ''

        }
    }

    consultarUsuario() {
        console.log('hola')
        getInfoByUser(this.state.usuario).then((data) => {

            console.log(data)

            Swal.fire({
                allowOutsideClick: false,
                showCancelButton: false,
                showConfirmButton: false,
                background: 'transparent',
                width: 250,
                backdrop: `
                rgba(0,0,123,0.4)
                    url("/src/assets/github.gif")
                    center
                    no-repeat
                `
            })





            setTimeout(() => {
                if (data.message === 'Not Found') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Usuario no existe!',
                    })
                } else {

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: '¡Usuario encontrado!',
                        showConfirmButton: false,
                        timer: 525
                      })
                    this.setState({ mostrarDatos: true, jsonDatosUsuario: data })
                }
            }, 1250);

        })
    }

    render() {
        return (
            <Container className='container'>
                <Row>
                    <img src={github} className='imagenGithub' />
                </Row>


                <Col style={{ marginTop: '35px', width: '75%', textAlign: 'center' }}>
                    <Row>
                        Ingrese usuario
                    </Row>

                    <Row>
                        <FormGroup>
                            <Row>
                                <Col xs={7} sm={9} lg={5}>
                                    <Form.Control style={{ width: '100%', border: 'bold', borderRadius: '10px', textAlign: 'left' }} type="text" className="formularioTexto prueba" required name="descripcion" onChange={(selectedOption) => this.setState({ usuario: selectedOption.target.value })} maxLength={10} >
                                    </Form.Control>
                                </Col>

                                <Col sm={3} xs={5} style={{}} lg={5}>


                                    <button className="botonVerificado" disabled={this.state.usuario.length < 1} onClick={() => this.consultarUsuario()}>Buscar</button>

                                </Col>

                            </Row>

                        </FormGroup >
                    </Row>
                </Col>

                {this.state.mostrarDatos &&
                    <div>
                        <DatosUsuario jsonDatosUsuario = {this.state.jsonDatosUsuario}/>
                    </div>
                }

            </Container>
        )
    }


}
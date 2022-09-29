import React from "react";
import { Container, Col, Row, Table, Pagination, FormGroup, Form } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import DatosUsuario from '../datosUsuario/datosUsuario'
import { getUsers } from "../../../services/api";
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
        getUsers(this.state.usuario).then((data) => {

            console.log(data)

            Swal.fire({
                allowOutsideClick: false,
                showCancelButton: false,
                showConfirmButton: false,
                background: 'transparent',
                width: 250,
                backdrop: `
                rgba(0,0,123,0.4)
                    url("https://raw.githubusercontent.com/gist/theAdityaNVS/f5b585d1082da2dffffea32434f37956/raw/7f9552d0a179b4f84059259fa878199e369b069c/GitHub-logo.gif")
                    center
                    no-repeat
                `
            })





            setTimeout(() => {
                if (data.total_count === 0) {
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
                        timer: 750
                    })
                    this.setState({ mostrarDatos: true, jsonDatosUsuario: data })
                }
            }, 1500);

        })
    }

    render() {
        return (
            <Container className='us'>
                <Row>
                    <p style = {{fontSize: '35px', fontWeight: 'bold'}}>Búsqueda de Usuarios</p>
                </Row>



                    <Col style={{ marginTop: '35px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>

                        <Row style = {{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                                    <Col xs={7} sm={12} lg={5}>
                                        <Form.Control placeholder="Ingrese el usuario..." style={{ width: '100%', border: 'bold', borderRadius: '10px', textAlign: 'left' }} type="text" className="formularioTexto prueba" required name="descripcion" onChange={(selectedOption) => this.setState({ usuario: selectedOption.target.value })} maxLength={10} >
                                        </Form.Control>
                                    </Col>

                                    <Col sm={3} xs={5} style={{}} lg={2}>


                                        <button style = {{paddingLeft: '15.5px', paddingRight: '15.5px', fontSize: '15.5px', backgroundColor: '#f3a391', color: 'black', borderRadius: '7.5px', paddingTop: '7.5px', paddingBottom: '7.5px', borderColor: '#f3a391'}} disabled={this.state.usuario.length < 1} onClick={() => this.consultarUsuario()}>
                                            Buscar
                                        </button>

                                    </Col>


                        </Row>
                    </Col>


                {this.state.mostrarDatos &&
                    <div>
                        <DatosUsuario jsonDatosUsuario={this.state.jsonDatosUsuario} />
                    </div>
                }

            </Container>
        )
    }


}
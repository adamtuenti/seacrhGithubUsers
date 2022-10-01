import React, { useState } from "react";
import { Container, Col, Row, FormGroup, Form } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import styled from 'styled-components'

import UsuariosHook from './usuarios'
import { getUsers } from "../../../services/api";
import '../../styles/styles.scss'





export default function SearchBarUser() {

    const [usuario, setUsuario] = useState('')
    const [dataVacia, setDataVacia] = useState(false)
    const [jsonDatosUsuario, setJsonDatosUsuario] = useState('')

    const consultarUsuario = () => {
        getUsers(usuario).then((data) => {

            Swal.fire({
                allowOutsideClick: false,
                showCancelButton: false,
                showConfirmButton: false,
                background: 'transparent',
                width: 250,
                timer: 1575,
                backdrop: `
                rgba(0,0,123,0.4)
                    url("https://raw.githubusercontent.com/gist/theAdityaNVS/f5b585d1082da2dffffea32434f37956/raw/7f9552d0a179b4f84059259fa878199e369b069c/GitHub-logo.gif")
                    center
                    no-repeat
                `
            })


            setTimeout(() => {
                setJsonDatosUsuario(data['items'])
                if (data.total_count === 0) {
                    setDataVacia(true)
                } else {

                    setDataVacia(false)
                }
            }, 1575);

        })
    }

    const Title = styled.p`
        font-size: 35px;
        text-align: center;
        font-weight: bold;
        @media (max-width: 1000px) {
            font-size: 22.5px !important
        
        }
    `;

    const ButtonSearch = styled.button`
        padding-left: 15.5px;
        padding-right: 15.5px;
        font-size: 15.5px; 
        background-color: #f3a391; 
        color: black; 
        border-radius: 7.5px; 
        padding-top: 7.5px; 
        padding-bottom: 7.5px;
        border-color: #f3a391;
        width: 100%
    `;

    const TextNoRepo = styled.p`
        font-size: 25px;
        text-align: center;
        font-weight: bold;
        margin-top: 35px;
        margin-bottom: 27.5px;
        @media (max-width: 1000px) {
            margin-top: 22.5px !important;
            font-size: 21.5px !important;
            margin-bottom: 12.5px;
        
        }
    `;

    const ImageNoRepo = styled.img`
        width: 25%;
        @media (max-width: 1000px) {
            width: 62.5% !important
        
        }
    `;
    
    return (
        <Container id='container'>
            <Row>
                <Title>Búsqueda de Usuarios</Title>
            </Row>


            <Col style={{ marginTop: '25px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }} md = {6} xs = {11} lg ={6}>
                <FormGroup>
                    <Row style = {{textAlign: 'center'}}>
                        <Col md = {9} xs = {8}>
                            <Form.Control placeholder="Ingrese el usuario..." id = 'formSearch' type="text" required name="descripcion" onChange={(selectedOption) => setUsuario(selectedOption.target.value)} >
                            </Form.Control>
                        </Col>
                        <Col md = {3} xs = {4}>
                            <ButtonSearch onClick={() => consultarUsuario()}>
                                Buscar
                            </ButtonSearch>
                        </Col>

                    </Row>
                </FormGroup>
            </Col>

            {jsonDatosUsuario.length > 0 &&
                <div>
                    <UsuariosHook jsonDatosUsuario={jsonDatosUsuario} />
                </div>
            }

            {dataVacia &&
                <div>
                    <TextNoRepo>
                        No se encontraron usuarios
                    </TextNoRepo>
                    <ImageNoRepo src = 'https://cdn.dribbble.com/users/364116/screenshots/1899338/yogocat_animation.gif' className = 'img-fluid'/>
                </div>
            }

        </Container>
    )



}
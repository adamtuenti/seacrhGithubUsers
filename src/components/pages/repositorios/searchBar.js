import React, { useState } from "react";
import { Container, Col, Row, FormGroup, Form } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import styled from 'styled-components'
import RepositoriosHook from './repositorios'
import { getRepositoriesByName } from "../../../services/api";
import '../../styles/styles.scss'


export default function SearchBarRepo() {

    const [repositorio, setRepositorio] = useState('')
    const [dataVacia, setDataVacia] = useState(false)
    const [jsonDatosRepo, setJsonDatosRepo] = useState('')
    const consultarRepositorios = () => {
        getRepositoriesByName(repositorio).then((data) => {
            Swal.fire({
                allowOutsideClick: false,
                showCancelButton: false,
                showConfirmButton: false,
                background: 'transparent',
                width: 250,
                timer: 1500,
                backdrop: `
                rgba(0,0,123,0.4)
                    url("https://raw.githubusercontent.com/gist/theAdityaNVS/f5b585d1082da2dffffea32434f37956/raw/7f9552d0a179b4f84059259fa878199e369b069c/GitHub-logo.gif")
                    center
                    no-repeat
                `
            })

            setTimeout(() => {
                setJsonDatosRepo(data['items'])
                if (data.total_count === 0) {
                    setDataVacia(true)
                } else {
                    setDataVacia(false)
                }
            }, 1500);

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
                <Title>Búsqueda de Repositorios</Title>
            </Row>

            <Col style={{ marginTop: '25px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }} md = {6} xs = {11} lg ={6}>
                <FormGroup>
                    <Row style = {{textAlign: 'center'}}>
                        <Col md = {9} xs = {8}>
                            <Form.Control placeholder="Ingrese el nombre..." style={{ width: '100%', border: 'bold', borderRadius: '10px', textAlign: 'left' }} type="text" id="searchBar" required name="descripcion" onChange={(selectedOption) => setRepositorio(selectedOption.target.value)} >
                            </Form.Control>
                        </Col>
                        <Col md = {3} xs = {4}>
                            <ButtonSearch onClick={() => consultarRepositorios()}>
                                Buscar
                            </ButtonSearch>
                        </Col>
                    </Row>
                </FormGroup>
            </Col>


            {jsonDatosRepo.length > 0 &&
                <div>
                    <RepositoriosHook jsonDatosRepo={jsonDatosRepo} />
                </div>
            }

            {dataVacia &&
                <div>
                    <TextNoRepo>
                        No se encontraron reposotorios
                    </TextNoRepo>
                    <ImageNoRepo src = 'https://cdn.dribbble.com/users/364116/screenshots/1899338/yogocat_animation.gif' className = 'img-fluid'/>
                </div>
            }

        </Container>
    )



}
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Table, Pagination, FormGroup, Form } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import DatosUsuario from '../datosUsuario/datosUsuario'
import { getRepositoriesByUser } from "../../../services/api";

import {useParams} from "react-router-dom"











export default function Repositorios(){

    const {id} = useParams()
    const { repositorios, setRepositorios } = useState()

    /* constructor(props) {
        super(props);
        this.state = {
            usuario: 'adamtuenti',
            mostrarDatos: false,
            repositorios: []

        }
    } */

    useEffect(() => {
        console.log(id)

        getRepositoriesByUser('adamtuenti').then((data) => {

            
                    /* this.setState({ mostrarDatos: true, repositorios: data }) */
                    setRepositorios(data)

        })
    }
    )


        
        return (
            <Container className='us'>
                <Row>
                    <p style = {{fontSize: '35px', fontWeight: 'bold'}}>Repositorios de Usuario</p>
                </Row>



                    {repositorios.map(data =>(
                        <p>{data.name}</p>
                    ))}

            </Container>
        )



}
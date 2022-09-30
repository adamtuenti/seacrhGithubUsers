import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


import { getRepositoriesByUser } from "../../../services/api";

import {useParams, useLocation } from "react-router-dom"











export default function RepositoriosUsuario(){

    const search = useLocation().search;
    const params = new URLSearchParams(search);
    const foo = params.get('user');
    const [ repositorios, setRepositorios ] = useState([])

    const id=new URLSearchParams(search).get("user");
    

    const location = useLocation();

    

    /* constructor(props) {
        super(props);
        this.state = {
            usuario: 'adamtuenti',
            mostrarDatos: false,
            repositorios: []

        }
    } */

    useEffect(() => {

        if(repositorios === []){

        getRepositoriesByUser('adamtuenti').then((data) => {

            
                    /* this.setState({ mostrarDatos: true, repositorios: data }) */
                    setRepositorios(data)

            })
        }
    }
    )


        
        return (
            <Container className='us'>
                <Row>
                    <p style = {{fontSize: '35px', fontWeight: 'bold'}}>Repositorios de Usuario</p>
                </Row>



                    {/* {repositorios.map(data =>(
                        <p>{data.name}</p>
                    ))} */}

            </Container>
        )



}
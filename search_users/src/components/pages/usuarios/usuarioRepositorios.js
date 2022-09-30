import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";


import { getRepositoriesByUser } from "../../../services/api";












export default function RepositoriosUsuario(){

    const [ repositorios, setRepositorios ] = useState([])



    


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
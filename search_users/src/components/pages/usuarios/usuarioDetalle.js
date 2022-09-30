import React, { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import 'sweetalert2/src/sweetalert2.scss'
import { GoLocation, GoRepo, GoOrganization } from "react-icons/go";


import { getUserDetail } from "../../../services/api";

import {useParams, useLocation } from "react-router-dom"











export default function UsuarioDetalle(){

    
    const [ datosUsuario, setDatosUsuario ] = useState('')

    const {user} = useParams()
    


    


    useEffect(() => {
        console.log(user)

        if(datosUsuario === ''){

        getUserDetail(user).then((data) => {
            console.log(data)

            
                    setDatosUsuario(data)

            })
        }
    }
    )


        
        return (
            <Container className='us'>
                <Row>
                    <p style = {{fontSize: '35px', fontWeight: 'bold'}}>{datosUsuario.name === null ? datosUsuario.login : datosUsuario.name}</p>
                </Row>

                <Card style = {{marginLeft: 'auto', marginRight: 'auto', marginTop: '25px', padding: '35px', textAlign: 'center', borderRadius: '15px', width: '450px'}}>
                                <Card.Img variant="top" src={datosUsuario.avatar_url} style = {{borderRadius: '25px', width: '175px', height: '175px', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto'}}/>
                                <Card.Body>
                                    <Card.Title>{datosUsuario.login}</Card.Title>
                                    <p><GoLocation style = {{marginRight: '5.5px'}}/>{datosUsuario.location === null ? 'Desconocida' : datosUsuario.location}</p>
                                   <p><GoRepo style = {{marginRight: '5.5px'}}/>{datosUsuario.public_repos}</p>
                                   <p><GoOrganization style = {{marginRight: '5.5px'}}/> {datosUsuario.followers} followers</p>
                                   <p><GoOrganization style = {{marginRight: '5.5px'}}/> {datosUsuario.following} following</p>
                                </Card.Body>
                            </Card>






            </Container>
        )



}
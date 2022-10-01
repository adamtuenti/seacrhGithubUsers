import React, { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { GoLocation, GoRepo, GoOrganization } from "react-icons/go";
import styled from 'styled-components'

import { Link } from "react-router-dom";

import { getUserDetail } from "../../../services/api";
import { useParams } from "react-router-dom"
import '../../styles/styles.scss'



export default function UsuarioDetalle(){
    
    const [ datosUsuario, setDatosUsuario ] = useState('')
    const {user} = useParams()
    
    useEffect(() => {
        if(datosUsuario === ''){
            getUserDetail(user).then((data) => {
                setDatosUsuario(data)

            })
        }
    })

    const Title = styled.p`
        font-size: 35px;
        text-align: center;
        font-weight: bold;
        @media (max-width: 1000px) {
            font-size: 22.5px !important
        
        }
    `;

    const TextDetail = styled.p`
        font-size: 17.5px;
        text-align: center;
        @media (max-width: 1000px) {
            font-size: 13.5px !important
        
        }
    `;

    const LinkRepo = styled.a`
        font-size: 17.5px;
        text-align: center;
        @media (max-width: 1000px) {
            font-size: 13.5px !important
        
        }
    `;


        
    return (
        <Container id='container'>
            <Row>
                <Title>{datosUsuario.name === null ? datosUsuario.login : datosUsuario.name}</Title>
            </Row>

            <Card id = 'cardDetalle' style = {{marginLeft: 'auto', marginRight: 'auto', marginTop: '25px', padding: '35px', textAlign: 'center', borderRadius: '15px', width: '450px'}}>
                <Card.Img id = 'avatarDetalle' variant="top" src={datosUsuario.avatar_url} style = {{borderRadius: '25px', width: '175px', height: '175px', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto'}}/>
                <Card.Body>
                    <Card.Title>{datosUsuario.login}</Card.Title>
                    <TextDetail><GoLocation style = {{marginRight: '5.5px'}}/>{datosUsuario.location === null ? 'Desconocida' : datosUsuario.location}</TextDetail>
                    <TextDetail><GoRepo style = {{marginRight: '5.5px'}}/>{datosUsuario.public_repos}</TextDetail>
                    <TextDetail><GoOrganization style = {{marginRight: '5.5px'}}/> {datosUsuario.followers} followers</TextDetail>
                    <TextDetail><GoOrganization style = {{marginRight: '5.5px'}}/> {datosUsuario.following} following</TextDetail>
                    <Link to = {`/repositorios/${datosUsuario.login}`}><LinkRepo href = ''>Ver repositorios</LinkRepo></Link>
                </Card.Body>
            </Card>

        </Container>
    )



}
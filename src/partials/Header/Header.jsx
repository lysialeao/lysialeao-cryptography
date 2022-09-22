import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Itens, Item } from './styles'

const Header = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Item onClick={() => navigate('/')}>Início</Item>
            <Itens>
                <Item onClick={() => navigate('/one-time-pad')}>One Time Pad</Item>
                <Item onClick={() => navigate('/cifra-de-cesar')}>Cifra de Cesar</Item>
                <Item>Cifra de Hill</Item>
                <Item>Cifra de Vigenere</Item>
            </Itens>
        </Container>
    )
}

export default Header
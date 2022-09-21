import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Item } from './styles'

const Header = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Item onClick={() => navigate('/')}>Início</Item>
            <Item>Cifra de Hill</Item>
        </Container>
    )
}

export default Header
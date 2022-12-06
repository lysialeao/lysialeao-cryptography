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
                <Item onClick={() => navigate('/caesar-cipher')}>Cifra de Cesar</Item>
                <Item onClick={() => navigate('/vigenere-cipher')}>Cifra de Vigenere</Item>
                <Item onClick={() => navigate('/hill-cipher')} >Cifra de Hill</Item>
            </Itens>
        </Container>
    )
}

export default Header
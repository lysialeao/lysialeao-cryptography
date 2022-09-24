import React, { useState } from 'react'
import { Container } from './styles'

import Header from '../Header/Header'
import Form from '../Form/Form'


const inputs = [
    {
        label:'Mensagem',
        type: 'text',
        name: 'msg'
    },
    {
        label:'Número de deslocamento',
        type: 'number',
        name: 'key'
    }
]

const VigenereCipher = () => {
    const [ result, setResult ] = useState()
    const handleSubmit = (event) => {
        event.preventDefault()

        const msg = Number(event.target.msg.value)
        const key = Number(event.target.key.value)
        const option = event.target.option.value

        if(option === 'Criptografar') {
            setResult()
        }

        if(option === 'Descriptografar') {
            setResult()
        }
    }
    return (
        <Container>
            <Header />
            <Form onSubmit={handleSubmit} inputs={inputs}/>
            { result && result}
        </Container>
    )
}

export default VigenereCipher
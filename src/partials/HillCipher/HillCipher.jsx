import React, { useState } from 'react'

import Header from '../Header/Header'
import Form from '../Form/Form'
import { Container } from './styles'


const inputs = [
    {
        label:'Mensagem: ',
        type: 'text',
        name: 'msg'
    },
    {
        label:'Chave: ',
        type: 'text',
        name: 'key'
    }
]

const HillCipher = () => {

    const [ result, setResult ] = useState(null)

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
            { result && result }
        </Container>
    )
}

export default HillCipher
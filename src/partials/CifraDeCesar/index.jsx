import React, { useState } from 'react'

import Form from '../../partials/Form/Form'

import { Container } from './styles'
import Header from '../Header/Header'

const CifraDeCesar = () => {

    const [ result, setResult ] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        const msg = Number(event.target.msg.value)
        const key = Number(event.target.key.value)
        const option = event.target.option.value


        if(option === 'Criptografar') {
            setResult(`A mensagem criptografada é: ${msg.toString(2) ^ key.toString(2)}`)
        }

        if(option === 'Descriptografar') {
            setResult(`A mensagem criptografada é: ${msg ^ key.toString(2)}`)
        }

    }

    return(
        <Container>
            <Header />
            <h1>Cifra de Cesar</h1>
            <Form onSubmit={handleSubmit}/>
            { result && result}
        </Container>
    )
}

export default CifraDeCesar
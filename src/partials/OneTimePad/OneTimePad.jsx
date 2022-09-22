import React, { useState } from 'react'

import Form from '../../partials/Form/Form'

import { Container } from './styles'
import Header from '../Header/Header'

const OneTimePad = () => {

    const [ result, setResult ] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        const msg = Number(event.target.msg.value)
        const key = Number(event.target.key.value)
        const result = msg.toString(2) ^ key.toString(2)

        const option = event.target.option.value


        if(option === 'Criptografar') {
            setResult(`A mensagem criptografada é: ${result.toString()}`)
        }

        if(option === 'Descriptografar') {
            setResult(`A mensagem criptografada é: ${msg ^ key.toString(2)}`)
        }

    }

    return(
        <Container>
            <Header />
            <Form onSubmit={handleSubmit}/>
            { result && result}
        </Container>
    )
}

export default OneTimePad

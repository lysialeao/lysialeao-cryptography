import React, { useState } from 'react'

import Form from '../../partials/Form/Form'

import { Container } from './styles'
import Header from '../Header/Header'

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

const OneTimePad = () => {

    const [ result, setResult ] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        const msg = Number(event.target.msg.value)
        const key = Number(event.target.key.value)

        const resultBinary = msg.toString(2) ^ key.toString(2)
        const resultHex = parseInt(resultBinary, 2)

        const option = event.target.option.value


        if(option === 'Criptografar') {
            console.log(resultBinary)
            setResult(`A mensagem criptografada é: ${resultHex}`)
        }

        if(option === 'Descriptografar') {
            setResult(`A mensagem criptografada é: ${msg ^ key.toString(2)}`)
        }

    }

    return(
        <Container>
            <Header />
            <Form onSubmit={handleSubmit} inputs={inputs}/>
            { result && result}
        </Container>
    )
}

export default OneTimePad

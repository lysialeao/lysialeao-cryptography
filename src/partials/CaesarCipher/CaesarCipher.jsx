import React, { useState } from 'react'

import Form from '../Form/Form'

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

const CaesarCipher = () => {

    const [ result, setResult ] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        const msg = event.target.msg.value
        const key = Number(event.target.key.value)
        const option = event.target.option.value

        const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

        if(option === 'Criptografar') {

            const msgVector = msg.split('')
            let result = []

            for(let i = 0; i<=msgVector.lenght; i++ ){
                console.log(i)
                // alpha.find((element) => element === msgVector[i] && result.push(element))
            }

            // setResult(`A mensagem criptografada é: ${msg.toString(2) ^ key.toString(2)}`)
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

export default CaesarCipher
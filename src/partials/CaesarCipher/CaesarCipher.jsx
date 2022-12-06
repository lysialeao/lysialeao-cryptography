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

        const msgVector = msg.split('')

        let findInAlpha = []

        for(let i = 0; i<msgVector.length; i++ ){
            alpha.find((element) => element === msgVector[i] && findInAlpha.push(alpha.indexOf(element)))
        }

        if(option === 'Criptografar') {
            let crypto = []

            for(let i = 0; i<findInAlpha.length; i++){
                crypto.push(alpha[(findInAlpha[i] + key) % alpha.length])
            }

            setResult(`A mensagem criptografada é: ${crypto.join('')}`)
        }

        if(option === 'Descriptografar') {

            let crypto = []

            for(let i = 0; i<findInAlpha.length; i++){
                const letter = (findInAlpha[i] - key) % alpha.length
                if(letter < 0 ) crypto.push(alpha[alpha.length + letter])
                crypto.push(alpha[(findInAlpha[i] - key) % alpha.length])
            }

            setResult(`A mensagem descriptografada é: ${crypto.join('')}`)
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
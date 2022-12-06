import React, { useState } from 'react'
import { Container } from './styles'

import Header from '../Header/Header'
import Form from '../Form/Form'

const inputs = [
    {
        label:'Digite a mensagem (deve ser uma frase com quatro ou mais palavras)',
        type: 'text',
        name: 'msg'
    },
    {
        label:'Digite a chave (pode ser uma palavra ou frase',
        type: 'text',
        name: 'key'
    }
]

const VigenereCipher = () => {
    const [ result, setResult ] = useState()
    const handleSubmit = (event) => {
        event.preventDefault()

        const msg = event.target.msg.value
        const key = event.target.key.value
        const option = event.target.option.value

        const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ']

        const msgArray = msg.split('')
        const keyArray = key.split('')

        const sizeMsg = msgArray.length
        const sizeKey = keyArray.length

        const numberRepetions = Math.ceil(sizeMsg / sizeKey)
        let msgInNumberKey = (String(keyArray+',').repeat(numberRepetions)).split(',')
        msgInNumberKey.pop()

        if(option === 'Criptografar') {

            let crypto = []

            for(let i = 0; i<sizeMsg; i++){
                const positioninKey = keyArray.findIndex((element) => element === msgInNumberKey[i])
                const positioninMsg = msgArray.findIndex((element) => element === msgArray[i])

                const position = (positioninKey + positioninMsg) % alpha.length

                crypto.push(alpha[position])
            }

            setResult(`A mensagem criptografada é: ${crypto.join('')}`)
        }

        if(option === 'Descriptografar') {
            let crypto = []


            for(let i = 0; i<sizeMsg; i++){
                const positioninKey = keyArray.findIndex((element) => element === msgInNumberKey[i])
                const positioninMsg = msgArray.findIndex((element) => element === msgArray[i])

                console.log(positioninKey, positioninMsg)

                let position = (positioninKey - positioninMsg) % alpha.length
                if (position < 0 ) crypto.push(alpha[(position*-1)])

                crypto.push(alpha[position])
            }

            setResult(`A mensagem criptografada é: ${crypto.join('')}`)
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
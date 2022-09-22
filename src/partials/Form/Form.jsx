import React from 'react'
import { Container, FormStyled, Button } from './styles'

const Form = ({ onSubmit}) => {
    return (
        <Container>
            <FormStyled onSubmit={onSubmit}>
                <label>Insira sua mensagem:</label>
                <input type="number" name='msg'/>
                <label>Insira sua chave</label>
                <input type="number" name='key'/>
                <label>Selecione uma opção:</label>
                <select name='option'>
                    <option>Criptografar</option>
                    <option>Descriptografar</option>
                </select>
                <Button>Enviar</Button>
            </FormStyled>
        </Container>
    )
}
export default Form
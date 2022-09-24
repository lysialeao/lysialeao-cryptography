import React from 'react'
import { Container, FormStyled, Align, Button } from './styles'

const Form = ({ onSubmit, inputs }) => {
    return (
        <Container>
            <FormStyled onSubmit={onSubmit}>
                { inputs && inputs.map((item) => { return (
                    <Align>
                        <label>{item.label}</label>
                        <input type={item.type} name={item.name}/>
                    </Align>
                )})}
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
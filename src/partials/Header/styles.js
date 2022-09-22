
import styled from 'styled-components'

export const Container = styled.header`
    width: 100vw;
    height: 50px;
    position: fixed;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    background-color: #228B22;
    color: #fff2ee;

`

export const Item = styled.p`
    cursor: pointer;
`

export const Itens = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 5px;
`
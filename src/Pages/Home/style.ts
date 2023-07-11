import { styled } from "styled-components";


export const ServiceContainer = styled.section`
padding: 50px;
display: flex;
flex-flow: column nowrap;
gap: 15px;
background-color: black;
border-radius: 18px;
align-items: center;
`

export const ServiceItemsSection = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
` 

export const BlockText = styled.span`
 display: block;
`

export const ServiceItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
`

export const ServiceItemImage= styled.img`
    max-width: 400px;
    aspect-ratio: 1/1;
    object-fit: contain;
    border-radius: 18px;
    border-top-left-radius: 58px;
`

export const ServiceItemTextContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
    gap: 20px;
`
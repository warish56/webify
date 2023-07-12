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

export const AboutContainer = styled.section`
display: flex;
flex-flow: row wrap;
gap:100px;
align-items: flex-end;
`

export const AboutTextContainer = styled.div`
 display: flex;
 flex-flow: column nowrap;
 gap: 20px;
 padding-left: 50px;
 flex-basis: 40%;
 text-align: left;
`

export const AboutImageConatiner = styled.div`
 flex-basis: 40%;
 border-radius: 18px;
 overflow: hidden;
 flex-shrink: 0;
 flex-grow:2;
`

export const AboutImage = styled.img`
 max-width: 100%;
 object-fit: cover;
`

export const AboutAnalyticsContainer = styled.div`
 border-radius: 18px;
 margin-top: 30px;
 border: 1px solid #e3e3e3;
 padding: 50px;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-row-gap: 50px;
 grid-column-gap: 50px;
`

export const AboutAnalyticsItemContainer = styled.div`
display: flex;
flex-flow: column nowrap;
gap: 10px;
text-align: center;
`
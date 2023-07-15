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
export const TestimonialConatiner = styled.section`
display: flex;
flex-flow: column nowrap;
gap: 30px;
padding-left: 50px;
padding-top: 50px;

`
export const TestimonialHeaderContainer = styled.div`
display: flex;
flex-flow: column nowrap;
gap: 20px;
text-align: left;
`

export const TestimonialContentContainer = styled.div`
display: flex;
flex-flow: row wrap;
gap: 20px;
`

export const TestimonialContentLeft = styled.div`
display: flex;
flex-flow: column nowrap;
border-radius: 18px;
border: 1px lightgray solid;
flex-basis: 70%;
overflow: hidden;
`

export const TestimonailTextContainer = styled.div`
flex-grow: 1;
display: flex;
justify-content: center;
line-height: 40px;
padding: 50px;
text-align: left;
padding-right: 100px;

`

export const TestimonialContentRight = styled.div`
display: flex;
flex-flow: column nowrap;
border-radius: 18px;
background-color: ${props => props.theme.pallete.blue.primary};
flex-basis: min-content;
align-items: center;
justify-content: flex-end;
padding: 40px;
gap: 20px;
`

export const TestimonialFooter = styled.div`
display: flex;
align-items: center;
padding: 30px 50px;
background-color: ${props=> props.theme.pallete.gray.light};
`

export const TestimonialUserContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;
`

export const TestimonialActionContainer = styled.div`
display: flex;
gap: 10px;
margin-left: auto;
`

export const UserPic = styled.img`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 overflow: hidden;
 object-fit: cover;
`

export const ActionButton = styled.button`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: 1px solid lightgray;
`
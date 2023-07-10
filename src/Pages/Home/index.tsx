import { styled } from "styled-components"
import LaptopImg from '@assets/laptop.jpg'
import { Typography } from "@components/Typography"
import { Button } from "@components/Button"

const MainContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

const HeroContainer = styled.section`
 position: relative;
 overflow: hidden;
 isolation: isolate;
`

const HeroImage = styled.img`
 max-width: 100%;
 aspect-ratio: 2/1;
 object-fit: cover;
 border-radius: 18px;
`

const HeroDescriptionContainer = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    padding: 100px 50px;
    padding-top: 0;
    display: flex;
    flex-flow: column nowrap;
    z-index: 1;
    align-items: flex-start;
    gap: 20px;
`

const TextRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const HomePage = () => {
    return(
        <MainContainer>
            <HeroContainer>
                <HeroImage src={LaptopImg}/>
                <HeroDescriptionContainer>
                    <Typography variant="h5" color="white">SOFTWARE DEVELOPMENT SERVICE</Typography>
                    <TextRow>
                        <Typography style={{
                            maxWidth: '500px',
                            textAlign: 'left'
                        }} variant="h1" color="white">
                            We are a website & app
                            &nbsp; <span>development agency</span>
                        </Typography>
                        <Button style={{
                            padding: '15px 30px'
                        }} color="blue" backgroundColor="white">
                            Get in touch
                        </Button>
                    </TextRow>
                </HeroDescriptionContainer>
            </HeroContainer>
        </MainContainer>
    )
}
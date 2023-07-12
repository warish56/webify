import { styled } from "styled-components"
import LaptopImg from '@assets/laptop.jpg'
import { Typography } from "@components/Typography"
import { Button } from "@components/Button"

import {
    AboutAnalyticsContainer, 
    AboutAnalyticsItemContainer, 
    AboutContainer, 
    AboutImageConatiner, 
    AboutTextContainer, 
    BlockText, 
    ServiceContainer, 
    ServiceItemContainer, 
    ServiceItemImage, 
    ServiceItemTextContainer, 
    ServiceItemsSection,
    AboutImage
} from './style'

import WebServiceImg from '@assets/website_service.png';
import AppServiceImg from '@assets/app_service.png';
import WebAppServiceImg from '@assets/webApp_service.png'
import WorkImg from '@assets/working.jpg'

import { serviceDescription } from "../../constants/home"

type ServiceItemProps = {
    title: string;
    description: string;
    image: string;
}

type AnalyticsItemProps = {
    title: string;
    description: string;
}


const MainContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 50px;
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



const HeroSection = () => {
    return(
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
    )
}


const ServiceItem = ({title, description, image}:ServiceItemProps) => {
    return(
        <ServiceItemContainer>
            <ServiceItemImage src={image} />
            <ServiceItemTextContainer>
                <Typography variant="h3" color="white">{title}</Typography>
                <Typography style={{
                    lineHeight: '24px'
                }} variant="h4" color="gray">{description}</Typography>
            </ServiceItemTextContainer>
        </ServiceItemContainer>
    )
}

const ServiceSection = () => {
    return(
        <ServiceContainer>
            <Typography variant="h5" color="gray">Our Service</Typography>
            <Typography style={{
                lineHeight: '45px'
            }} variant="h1" color="white">
                We help business to make their 
                <BlockText>product come to life, worldwide.</BlockText>
            </Typography>

            <ServiceItemsSection>
                <ServiceItem title="Website development" description={serviceDescription.web} image={WebServiceImg} />
                <ServiceItem title="Website app development" description={serviceDescription.webApp} image={WebAppServiceImg} />
                <ServiceItem title="Mobile app development" description={serviceDescription.mobile} image={AppServiceImg} />
            </ServiceItemsSection>
        </ServiceContainer>
    )
}


const AnalyticsItem = ({title, description}:AnalyticsItemProps) => {
    return(
        <AboutAnalyticsItemContainer>
            <Typography color="black" variant="h2">{title}</Typography>
            <Typography color="gray" variant="h4">{description}</Typography>
        </AboutAnalyticsItemContainer>
    )
}

const AboutUsSection = () => {
    return(
        <AboutContainer>
            <AboutTextContainer>

                <Typography color="gray" variant="h5">ABOUT US</Typography>
                <Typography color="black" variant="h1">The team will turn your ideas into reality</Typography>
                <Typography color="gray" variant="body" style={{
                    lineHeight: "25px"
                }}>
                    We feel in this digital age, connection is required to develop
                    a successful corporate empire. Having user-focused websites
                    or mobile applications that are simple to use can increase your
                    market competitivness.
                </Typography>

                <Button backgroundColor="light_blue" color="blue">More about us</Button>

                <AboutAnalyticsContainer>
                    <AnalyticsItem title="8" description="Operated Years"/>
                    <AnalyticsItem title="200+" description="Happy Clients"/>
                    <AnalyticsItem title="40+" description="Professionals"/>
                    <AnalyticsItem title="650+" description="Amazing Project"/>
                </AboutAnalyticsContainer>

            </AboutTextContainer>
            <AboutImageConatiner>
                <AboutImage src={WorkImg} alt="user working on laptop"/>
            </AboutImageConatiner>
        </AboutContainer>

    )
}

export const HomePage = () => {
    return(
        <MainContainer>
            <HeroSection />
            <ServiceSection />
            <AboutUsSection />
        </MainContainer>
    )
}
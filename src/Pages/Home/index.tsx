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
    AboutImage,
    TestimonialConatiner,
    TestimonialHeaderContainer,
    TestimonialContentContainer,
    TestimonialContentLeft,
    TestimonialContentRight,
    TestimonialFooter,
    TestimonialUserContainer,
    TestimonialActionContainer,
    UserPic,
    ActionButton,
    TestimonailTextContainer,
    ContactUsContainer,
    ContactUsLinksContainer,
    ContactUsPolicyContainer,
    ContactUsPolicyContent,
    ContactUsContent
} from './style'

import WebServiceImg from '@assets/website_service.png';
import AppServiceImg from '@assets/app_service.png';
import WebAppServiceImg from '@assets/webApp_service.png'
import WorkImg from '@assets/working.jpg'

import { serviceDescription, testimonialData } from "../../constants/home"
import { useState } from "react"

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


const ContactUs = () => {
    return(
        <ContactUsContainer>
            <ContactUsContent>
                <Typography style={{marginBottom: '20px'}} variant="h5" color="gray">CONTACT US</Typography>
                <Typography variant="h1" color="white">You've got this far.</Typography>
                <Typography variant="h1" color="white">Ready to get started?</Typography>
                <Button  style={{marginTop: '40px'}} color="white" backgroundColor="primary_blue">Get in touch </Button>
            </ContactUsContent>
            <ContactUsLinksContainer>
                <Typography variant="h5" color="gray">Works</Typography>
                <Typography variant="h5" color="gray">Services</Typography>
                <Typography variant="h5" color="gray">About</Typography>
                <Typography variant="h5" color="gray">Blog</Typography>
                <Typography variant="h5" color="gray">Carrers</Typography>
            </ContactUsLinksContainer>
            <ContactUsPolicyContainer>
                <Typography variant="h5" color="gray">Copyright @2022,Inc. All rights reserved</Typography>
                <ContactUsPolicyContent>
                    <Typography variant="h5" color="gray">Privacy Policy</Typography>
                    <Typography variant="h5" color="gray">FAQ</Typography>
                    <Typography variant="h5" color="gray">Terms of service</Typography>
                </ContactUsPolicyContent>
            </ContactUsPolicyContainer>
            
        </ContactUsContainer>
    )
}


const Testimonial = () => {
    const [currentIndex, setIndex] = useState(0);

    const currentData = testimonialData[currentIndex];

    return(
        <TestimonialConatiner>
            <TestimonialHeaderContainer>
                <Typography color="gray" variant="h5">TESTIMONIALS</Typography>
                <Typography color="black" variant="h2">What they say about us</Typography>
            </TestimonialHeaderContainer>
            <TestimonialContentContainer>
                <TestimonialContentLeft>
                    <TestimonailTextContainer>
                            <Typography color="black" variant="quote">
                                {currentData.feedback}
                            </Typography>
                        </TestimonailTextContainer>

                    <TestimonialFooter>
                        <TestimonialUserContainer>
                            <UserPic src={currentData.pic} alt="user photo"/>
                            <Typography variant="h3" color="black">{currentData.userName}</Typography>
                        </TestimonialUserContainer>
                        <TestimonialActionContainer>
                            <ActionButton onClick={() => setIndex(val => Math.max(0, val-1))}>{`<`}</ActionButton>
                            <ActionButton onClick={() => setIndex(val => Math.min(val+1, testimonialData.length-1))}>{`>`}</ActionButton>
                        </TestimonialActionContainer>
                    </TestimonialFooter>
                </TestimonialContentLeft>
                <TestimonialContentRight>
                    <Typography color="white" variant="h2">Want to estimate your project?</Typography>
                    <Button backgroundColor="white" color="black">Project estimation</Button>
                </TestimonialContentRight>
            </TestimonialContentContainer>
        </TestimonialConatiner>
    )
}


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
            <Testimonial />
            <ContactUs />
        </MainContainer>
    )
}
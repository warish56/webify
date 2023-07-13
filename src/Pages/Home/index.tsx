import { styled } from "styled-components";
import LaptopImg from "@assets/laptop.jpg";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";

import {
  BlockText,
  ServiceContainer,
  ServiceItemContainer,
  ServiceItemImage,
  ServiceItemTextContainer,
  ServiceItemsSection,
} from "./style";

import WebServiceImg from "@assets/website_service.png";
import AppServiceImg from "@assets/app_service.png";
import WebAppServiceImg from "@assets/webApp_service.png";
import { serviceDescription } from "../../constants/home";

type ServiceItemProps = {
  title: string;
  description: string;
  image: string;
};

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
`;

const HeroContainer = styled.section`
  position: relative;
  overflow: hidden;
  isolation: isolate;
`;

const HeroImage = styled.img`
  max-width: 100%;
  aspect-ratio: 2/1;
  object-fit: cover;
  border-radius: 18px;
`;

const HeroDescriptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 100px 50px;
  padding-top: 0;
  display: flex;
  flex-flow: column nowrap;
  z-index: 1;
  align-items: flex-start;
  gap: 20px;
`;

const TextRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const WorkSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 90%;
  margin: auto;
`;
const WorkSectionDescContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DivContainer1 = styled.div`
  text-align: left;
  width: 52%;
  font-weight: 600;
`;
const DivContainer2 = styled.div`
  text-align: left;
  width: 29%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const WorkSection = () => {
  return (
    <WorkSectionContainer>
      <Typography
        style={{
          alignSelf: "flex-start",
        }}
        variant="h6"
        color="gray"
      >
        OUR WORK
      </Typography>

      <WorkSectionDescContainer>
        <DivContainer1>
          {/* <Typography variant="h6" color="black">OUR WORK</Typography> */}
          <Typography variant="h2" color="black">
            We help businesses to make their product come to life, worldwide
          </Typography>
        </DivContainer1>
        <DivContainer2>
          <Typography variant="h6" color="gray">
            Our experience has helped our clients launch new companies in the
            digital arena throughout the years.Take a look at some of our
            greatest work.
          </Typography>
          <Button
            style={{
              width: "50%",
            }}
            color="blue"
            backgroundColor="light_blue"
          >
            See all Works
          </Button>
        </DivContainer2>
      </WorkSectionDescContainer>
    </WorkSectionContainer>
  );
};

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroImage src={LaptopImg} />
      <HeroDescriptionContainer>
        <Typography variant="h5" color="white">
          SOFTWARE DEVELOPMENT SERVICE
        </Typography>
        <TextRow>
          <Typography
            style={{
              maxWidth: "500px",
              textAlign: "left",
            }}
            variant="h1"
            color="white"
          >
            We are a website & app &nbsp; <span>development agency</span>
          </Typography>
          <Button
            style={{
              padding: "15px 30px",
            }}
            color="blue"
            backgroundColor="white"
          >
            Get in touch
          </Button>
        </TextRow>
      </HeroDescriptionContainer>
    </HeroContainer>
  );
};

const ServiceItem = ({ title, description, image }: ServiceItemProps) => {
  return (
    <ServiceItemContainer>
      <ServiceItemImage src={image} />
      <ServiceItemTextContainer>
        <Typography variant="h3" color="white">
          {title}
        </Typography>
        <Typography
          style={{
            lineHeight: "24px",
          }}
          variant="h4"
          color="gray"
        >
          {description}
        </Typography>
      </ServiceItemTextContainer>
    </ServiceItemContainer>
  );
};

const ServiceSection = () => {
  return (
    <ServiceContainer>
      <Typography variant="h5" color="gray">
        Our Service
      </Typography>
      <Typography
        style={{
          lineHeight: "45px",
        }}
        variant="h1"
        color="white"
      >
        We help business to make their
        <BlockText>product come to life, worldwide.</BlockText>
      </Typography>

      <ServiceItemsSection>
        <ServiceItem
          title="Website development"
          description={serviceDescription.web}
          image={WebServiceImg}
        />
        <ServiceItem
          title="Website app development"
          description={serviceDescription.webApp}
          image={WebAppServiceImg}
        />
        <ServiceItem
          title="Mobile app development"
          description={serviceDescription.mobile}
          image={AppServiceImg}
        />
      </ServiceItemsSection>
    </ServiceContainer>
  );
};

export const HomePage = () => {
  return (
    <MainContainer>
      <HeroSection />
      <WorkSection />
      <ServiceSection />
    </MainContainer>
  );
};

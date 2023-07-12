import { styled } from "styled-components"
import { Typography } from "../Typography"
import { Button } from "../Button";


type LinkProps = {
    title: string;
    to?: string;
}

const Container = styled.section`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin-bottom: 40px;
`

const LinkGroup = styled.ul`
    display: flex;
    gap: 15px;
    align-items:center;
`

const Link = ({title}:LinkProps) => {
    return (
        <Typography variant="h4" color='gray'>
            {title}
        </Typography>
    )
}



export const Navbar = () => {
    return(
        <Container>
            <LinkGroup>
                <Link title="Works" />
                <Link title="Services" />
                <Link title="About" />
                <Link title="Blog" />
                <Link title="Carrers" />
            </LinkGroup>
            <Button backgroundColor="light_blue" color="blue">
                Project estimation
            </Button>
        </Container>
    )
}
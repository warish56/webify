import { styled } from "styled-components"
import { pallete } from "../../theme";
import { Typography } from "../Typography";


type BackgroundColor = 'white' | 'light_blue' | 'primary_blue';
type Color = 'blue' | 'white' | "black"

type btnProps = {
  children: React.ReactNode;
  backgroundColor: BackgroundColor
  color: Color;
  fullWidth?: boolean;
}

const getBackgroundColor = (color: BackgroundColor) => {
        switch(color){
            case 'white': return 'white';
            case 'light_blue': return pallete.blue.light;
            case 'primary_blue': return pallete.blue.primary;
            default: return 'transparent'
        }
}

const getColor = (color: Color) => {
    switch(color){
        case 'white': return 'white';
        case 'black': return 'black';
        case 'blue': return pallete.blue.primary;
        default: return 'black';
    }
}

const StyledButton = styled.button<StyledProps<btnProps>>`
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 27px;
   
    ${({theme, $color, $backgroundColor, $fullWidth}) => {
        return `
            ${theme.typography.btn_medium}
            background-color: ${getBackgroundColor($backgroundColor)};
            color: ${getColor($color)};
            width: ${$fullWidth ? 'auto': 'max-content'};
        `
    }}
`

export const Button = ({children, backgroundColor,color, fullWidth=false, ...rest}:btnProps&NativeProps<HTMLButtonElement>) => {
    return(
        <StyledButton $backgroundColor={backgroundColor} $color={color} $fullWidth={fullWidth}  {...rest}>
            <Typography variant="btn_small" color={color === 'white' ? 'white' : "blue"}>
                {children}
            </Typography>
        </StyledButton>
    )
}
import React from 'react';
import { typography, pallete } from '../../theme';
import { styled } from 'styled-components';


type variant = keyof typeof typography;
type color = 'white' | 'gray' | 'black' | 'blue'

type props = {
    children: React.ReactNode,
    variant: variant,
    color: color
}


type SpanProps = StyledProps<props>;

const getColor = (color: color) => {
    switch(color){
        case 'white': return 'white';
        case 'gray': return pallete.gray.primary;
        case 'blue': return pallete.blue.primary;
        default: return 'black';
    }
}

const StyledSpan = styled.span<SpanProps>`
    ${({theme, $variant, $color}) => {
        return `
        ${theme.typography[$variant]}
        color: ${getColor($color)};
        `
    }}
`

export const Typography = ({children, variant, color="black", ...rest}:props&NativeProps<HTMLSpanElement>) => {
    return(
        <StyledSpan $variant={variant} $color={color} {...rest}>
            {children}
        </StyledSpan>
    )
}
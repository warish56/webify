import {ThemeType} from './index';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {
        a?: string; 
    }
}

declare global{
    type omittedProps<T> = Omit<T, 'children'>
    type StyledProps<T> = {
        [K in keyof omittedProps<T> as `$${K}`]: omittedProps<T>[K]
    }

    type NativeProps<T> = React.HtmlHTMLAttributes<T>

}
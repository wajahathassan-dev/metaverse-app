import { css } from 'styled-components';

export const res = (width, props) => {
    return css`
        @media only screen and (max-width: ${width}px){
            ${props}
        }
    `
};
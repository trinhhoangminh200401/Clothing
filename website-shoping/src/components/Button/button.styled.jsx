import styled from "styled-components";

export const BaseButton = styled.button`
        min-width: 165px;
        width: auto;
        height: 50px;
        letter-spacing: 0.5px;
        line-height: 50px;
        padding: 0 35px 0 35px;
        margin: 0 10px;
        font-size: 15px;
        text-transform: uppercase;
        font-family: 'Open Sans Condensed';
        font-weight: bolder;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        color: white;

        &.default {
            background-color: black;


            &:hover {
                background-color: white;
                color: black;
                border: 1px solid black;
            }
        }


        ${'' /* &.create-account {
            background-color: #35e877;


            &:hover {
                background-color: #00b300;
                border: none;
            }
        } */}


        ${'' /* &.google-sign-in {
            background-color: #4285f4;
            color: white;

            &:hover {
                background-color: #357ae8;
                border: none;
            }
        }

        &.inverted {
            background-color: white;
            color: black;
            border: 1px solid black;

            &:hover {
                background-color: black;
                color: white;
                border: none;
            }
        } */}


    `
export const CreateAccount = styled(BaseButton)`
     background-color: #35e877;


            &:hover {
                background-color: #00b300;
                border: none;
            }

`;


export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
            color: white;

            &:hover {
                background-color: #357ae8;
                border: none;
            }


    `;
export const InvertedButton = styled(BaseButton)`
            background-color: white;
            color: black;
            border: 1px solid black;

            &:hover {
                background-color: black;
                color: white;
                border: none;
            }
        



`;
export const DefaultButton = styled(BaseButton)`


            background-color: black;


            &:hover {
                background-color: white;
                color: black;
                border: 1px solid black;
            }


`
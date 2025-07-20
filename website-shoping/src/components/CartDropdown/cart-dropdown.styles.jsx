import styled from "styled-components";
import { BaseButton, CreateAccount, GoogleSignInButton, InvertedButton } from '../Button/button.styled'
export const CartDropdowmContainer = styled.div`
  position: absolute;
    width: 300px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    ${BaseButton
    },${GoogleSignInButton},${InvertedButton} {
        margin-top: auto;
        margin-left: 0;
        margin-right: 0;
        font-size: 12px;
        width: 100%;
        background-color: black;
    }

`
export const EmptyMessage = styled.span`

   font-size: 18px;
        margin: 6em auto;
        display: inline;

`

export const CartItems = styled.div`
    display: flex;
        flex-direction: column;
        overflow: auto;

`
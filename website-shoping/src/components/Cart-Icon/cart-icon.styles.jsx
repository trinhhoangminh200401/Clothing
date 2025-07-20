import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg'
export const ShoppingIcon = styled(ShoppingSvg)`
        width: 30px;
        height: 30px;
`
export const CartIconContainer = styled.div`
    display: flex;
    width: 45px;
    height: 45px;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`
export const ItemCount = styled.span`
        position: absolute;
        bottom: 12px;
        font-size: 10px;
        font-weight: bold;
`
import Button, { ButtonType } from "../Button"
import CartItem from "../Cart-Item"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import './cartdropdowm.scss'
import { CartDropdowmContainer,CartItems,EmptyMessage } from "./cart-dropdown.styles"
import { CartContext } from "../../context/Cart.context"
export const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext)
  const navigate = useNavigate()
  const handleCheckOutPage = () => {
    navigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }
  return (
    <CartDropdowmContainer>
      <CartItems>
        {cartItems.length ?
          (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) :
          (<EmptyMessage>
              Your cart is empty
          </EmptyMessage>
          )
        }
      </CartItems>
      <Button buttonType={ButtonType.default}  onClick={handleCheckOutPage}>Go to checkout</Button>
    </CartDropdowmContainer>
  )
}


import { useContext } from "react"
import { CartContext } from "../../context/Cart.context"
import { ShoppingIcon,CartIconContainer,ItemCount } from "./cart-icon.styles"
const CartIcon = () => {
  const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
  const toggle =()=>{
      setIsCartOpen(!isCartOpen)  
  }
 
  return (
    <CartIconContainer onClick={toggle}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
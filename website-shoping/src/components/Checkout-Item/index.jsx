import { useContext } from "react";
import "./checkout-item.scss";
import { CartContext } from "../../context/Cart.context";
export const CheckOutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { clearCart,addCart,removeCart  } = useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>addCart(cartItem)}>+</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>removeCart(cartItem)}>-</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

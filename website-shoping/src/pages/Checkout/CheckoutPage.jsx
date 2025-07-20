import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { CheckOutItem } from "../../components/Checkout-Item";
import "./checkout.scss";
const CheckoutPage = () => {
  const { cartItems, addCart, removeCart, total } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
  
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return <CheckOutItem key={id} cartItem={cartItem} />;
      })}
      <span className="total">Total: {total}$</span>
    </div>
  );
};

export default CheckoutPage;

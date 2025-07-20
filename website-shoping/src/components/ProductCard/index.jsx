import { useContext } from "react";
import "./productCard.scss";
import Button , {ButtonType} from "../Button";
import { CartContext } from "../../context/Cart.context";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addCart } = useContext(CartContext);
  const addProduct = () => addCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button onClick={addProduct} buttonType={ButtonType.inverted}>
        Add to Shop
      </Button>
    </div>
  );
};
export default ProductCard;

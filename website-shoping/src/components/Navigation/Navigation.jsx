import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import LinkItems from '../../data/link-display.json'
import { CartDropdown } from "../CartDropdown";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { NavigationContainer } from "./Navigation.style";
function Navigation() {
  const { isCartOpen } = useContext(CartContext)
  return (
    <div>
      <NavigationContainer>
        <NavBar navitems={LinkItems} />
     
        {isCartOpen && <CartDropdown />}

      </NavigationContainer>

      <Outlet />
    </div>
  );
}

export default Navigation;

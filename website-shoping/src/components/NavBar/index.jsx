import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo  } from "../../assets/crown.svg";
import { UserContext } from "../../context/User.context";
import { useContext } from "react";
import { SignOut } from "../../utils/firebase";
import CartIcon from "../Cart-Icon";
import { LogoContainer,NavLink,NavLinks } from "./NavBar.style";
const NavBar = ({ navitems }) => {
  const { currentUser } = useContext(UserContext);
  
  return (
    <>
      <LogoContainer to="/">
        <CrwnLogo  className="logo-container" />
      </LogoContainer>
      <NavLinks>
        {console.log(navitems)}
        {navitems.map((navitem, index) => (
       
          <NavLink to={navitem.path} key={index}>
            {navitem.display === "SIGN IN" && currentUser
              ? <p onClick={SignOut}>Sign Out</p>
              : navitem.display}
          </NavLink>
        ))}
        <CartIcon  />
      </NavLinks>
    </>
  );
};
export default NavBar;

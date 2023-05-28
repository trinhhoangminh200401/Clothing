import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Navbar.styles.scss";
const NavBar = ({ navitems }) => {
  const {path,display}= navitems
    return (
    <>
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className="nav-links-container">
        {navitems.map((navitem,index)=>(
        <Link className="nav-link" to={navitem.path} key={index}>
           {navitem.display}
        </Link>
        ))}
        
      
      </div>
    </>
  );
};
export default NavBar;

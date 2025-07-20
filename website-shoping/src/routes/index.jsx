import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Homepage";
import Navigation from "../components/Navigation/Navigation";
import Authentication from "../pages/AuthenPage/Authentication";
import { useContext } from "react";
import { UserContext } from "../context/User.context";
import Shop from "../pages/shop/Shop";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
const MyPage = () => {
  const {Name,currentUser}=useContext(UserContext)
  console.log("context api",Name)
  console.log("currentuser",currentUser)
  return <>d</>;
};
function LinksClient() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication/>} />
        <Route path="checkout" element={<CheckoutPage />}/>
      </Route>
    </Routes>
  );
}

export default LinksClient;

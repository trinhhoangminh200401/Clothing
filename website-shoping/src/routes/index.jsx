import { Routes, Route } from "react-router-dom";
import Home from "../pages/Homepage";
import Navigation from "../pages/Navigation";
import Authentication from "../pages/AuthenPage/Authentication";
const MyPage = () => {
  return <>xin chao</>;
};
function LinksClient() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<MyPage />} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
}

export default LinksClient;

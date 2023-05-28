import { Outlet } from "react-router-dom";
import Directory from "../components/Directory/index";
import Categories from "../data/categories.json";
const Home = () => {
  return (
    <div>
      <Directory categories={Categories} />
      <Outlet />
    </div>
  );
};
export default Home;

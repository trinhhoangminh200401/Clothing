import { Outlet } from "react-router-dom";
import Directory from "../../components/Directory/index";
// import Categories from "../../data/categories.json";
const Home = () => {
  return (
    <div>
      <Directory  />
      <Outlet />
    </div>
  );
};
export default Home;

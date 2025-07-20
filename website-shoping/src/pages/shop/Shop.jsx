import { Routes, Route } from "react-router-dom";
import "./shop.scss";
import CategoriesPreviewPage from "../Categories-preview/Categories-preview";
import CategoryPage from "../Category/CategoryPage";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};
export default Shop;

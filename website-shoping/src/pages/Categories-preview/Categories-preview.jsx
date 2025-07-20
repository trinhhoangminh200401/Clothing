import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import "./categoriespreview.scss";
import CategoryReview from "../../components/Category-Preview";
const CategoriesPreviewPage = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="category-preview-container">
      {Object.keys(categories).map((category) => {
        const products = categories[category];
        return (
          <CategoryReview key={category} title={category} products={products} />
        );
      })}
    </div>
  );
};
export default CategoriesPreviewPage;

import CategoryItem from "../category-item"
import './directory.styles.scss'
const Directory =({categories})=>{
    return(
        <div className="directories-container">
        {categories.map(category => (
            <CategoryItem key={category.id} category={category} />
        ))}
        {/* <img /> */}
      </div>
    )
}
export default Directory
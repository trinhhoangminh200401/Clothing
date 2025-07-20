import { useParams } from 'react-router-dom'
import { useContext,useState,useEffect } from 'react'
import './category.scss'  
import { CategoriesContext } from '../../context/Categories.context'
import ProductCard from '../../components/ProductCard'

function CategoryPage() {
  const {category}= useParams()
  const {categories} = useContext(CategoriesContext)
  const [products,setProducts] = useState([])
  useEffect(()=>{
    setProducts(categories[category])
  },[category,categories])
  return (
    <div className='categories-container'> 
    {
      products?.map(product=>(
        <ProductCard product={product} key={product.id} />
      ))
    }
  </div>  
  )
}

export default CategoryPage
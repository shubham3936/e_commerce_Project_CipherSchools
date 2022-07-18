import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import ProductCategoriesBox from './ProductCategoriesBox/ProductCategoriesBox'
import "./ProductCategories.css";



function ProductCategories({productCategoryName, setProductCategoryName}) {
    
    const [productCategoryData,setProductCategoryData]=useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/categories`)
        .then(res =>res.json())
        .then(data=>setProductCategoryData(data))
    },[])

    function redirectToProductsPage(param){
        navigate(`products/${param}`);
        setProductCategoryName(param);
    }
  return (
    <div>
        <div className='categories_product_box_container'>
        {productCategoryData.map((value,key)=>(
            <ProductCategoriesBox
                // image = {value.image}
                title={value}
                onClicking = {()=>redirectToProductsPage(value)}
            />
        ))}
        </div>
    </div>
  )
}
export default ProductCategories;
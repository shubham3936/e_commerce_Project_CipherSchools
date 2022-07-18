import React, { Profiler, useEffect, useState } from 'react'
import './ProductPage.css';

function ProductPage({productCategoryName, setProductCategoryName}) {

    const [productData, setProductData] = useState([]);

    // console.log("productId", productId)
  console.log(productCategoryName);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${productCategoryName}`)
        .then(res => res.json())
        .then(data => setProductData(data))
        //.then(data=>console.log(data));
    }, [])

  return (
    <div className='Whole_product_page'>
        
        {productData.map((value,key)=>(
        
        <div className='all_product'>
          <div className='all_product_left'>
            <img  src={value.image} alt="" />
          </div>
          <div className='all_product_right'>
            <p>{value.title}</p>
            <p>{value.price}</p>
            <p>{value.description}</p>
            <p>{value.category}</p>
            <p>{value.rating.rate}</p>
            <p>{value.rating.count}</p>

          </div>
          
        </div>
        ))}
        
    </div>
  )
}

export default ProductPage 
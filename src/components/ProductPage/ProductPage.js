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
    <div>
        
        {productData.map((value,key)=>(
        // <div className='singleproductpage_left_container'>
        //     <img src={value.image} />
        // </div>
        // <div className='singleproductpage_right_container'>
        //     <p className='singleproductpage_right_title'>{value.title}</p>
        //     <p className='singleproductpage_right_desc'>{value.description}</p>
        //     <p className='singleproductpage_right_price'>₹{value.price}</p>
        //     <button className='singleproductpage_right_button'>ADD TO BAG</button>
        // </div>
        <div>
        <img  src={value.image} alt="" />
        
        <p>{value.title}</p>
        <p>{value.price}</p>
        <p>{value.description}</p>
        <p>{value.category}</p>
        <p>{value.rating.rate}</p>
        <p>{value.rating.count}</p>

        </div>
        ))}
        
    </div>
  )
}

export default ProductPage 
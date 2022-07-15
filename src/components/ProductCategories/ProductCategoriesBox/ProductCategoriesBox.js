import React from 'react'
import "./ProductCategoriesBox.css";

import mobiles from "../../../images/Category image/mobiles.jpg";
import tv from "../../../images/Category image/tv.jpg";
// import largeappliance from "../../images/Category image/largeappliances.jpg";
import cloth from "../../../images/Category image/cloth.jpg";
// import sportfitness from "../../images/Category image/sportfitness.jpg";
import kitchen from "../../../images/Category image/kitchen.jpg";

const categoryimage = [
  {
    image:mobiles
  },
  {
    image:tv
  },
  {
    image:kitchen
  },
  {
    image:cloth
  }
]

function ProductCategoriesBox(props) {
  return (
    <div className='product_box_container' onClick={props.onClicking}>
        <div className="product_box_image_container">
              {/* {categoryimage.map((value,key)=>(
                // <img src={value.image} alt=""/>
              ))} */}
                
            </div>
            <div className="product_box_details">
                    {/* Project title */}
                <p className="product_box_title">{props.title}</p>
        </div>
    </div>
  )
}

export default ProductCategoriesBox


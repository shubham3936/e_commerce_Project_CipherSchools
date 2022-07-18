import React from 'react'
import "./ProductCategoriesBox.css";

import electronics from "../../../images/Category image/electronics.jpg";
import jwelery from "../../../images/Category image/jwelery.jpg";
import mencloth from "../../../images/Category image/mencloth.jpg"
import womencloth from "../../../images/Category image/womencloth.jpg";

const categoryimage = [
  {
    image:electronics
  },
  {
    image:jwelery
  },
  {
    image:mencloth
  },
  {
    image:womencloth
  }
]

function ProductCategoriesBox(props) {
  return (
    <div className='product_box_container' onClick={props.onClicking}>
        <div className="product_box_image_container">
              {categoryimage.map((value,key)=>(
                <img src={value.image} alt=""/>
              ))}
                
            </div>
            <div className="product_box_details">
                    {/* Project title */}
                <p className="product_box_title">{props.title}</p>
        </div>
    </div>
  )
}

export default ProductCategoriesBox;


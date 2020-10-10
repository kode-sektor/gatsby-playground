import React from 'react'
import Img from 'gatsby-image';

export default function Product({product}) {

    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{minHeight : '100%'}}>
                <img fluid={product.image.fluid} className="card-img-top"/>
                <div className="card-body text-center">
                    <h5>{product.title}</h5>
                    <h6>$ {product.price}</h6>

                    <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
                        data-item-id={product.id} data-item-name={product.title} 
                        data-item-price={product.price}
                        // data-item-price="{&quot;usd&quot;: 20, &quot;cad&quot;: 25}"
                        // For data-item-url, basically insert the page where this buy call-to-action button lives.
                        // In the project its localhost:8000 but live, it is https://romantic-lalande-cd15b1.netlify.app/
                        // Both work, but the latter is more appropriate
                        data-item-image={product.image.fluid.src} data-item-url="romantic-lalande-cd15b1.netlify.app"
                        data-item-description="Dummy description"

                        // Responsible for inserting a text field (default custom type) if 
                        // data-item-custom1-options is not provided. User can engrave custom message on product
                        data-item-custom1-name="Coffee Variant"

                        >  
                        Add to Cart
                    </button>

                </div>
               
            </div>

        </div>
    )
}

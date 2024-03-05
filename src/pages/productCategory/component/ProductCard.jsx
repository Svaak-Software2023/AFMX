import { Link } from "react-router-dom";
import "./card.css"

function ProductCard({ data, parent }) {
  const product = data;

  return (
    <>
      {
        product ?
          <Link to={`/single-product/${parent}/${product.productId}`}>
            <div className="product-card card" key={product.productId} >
               <div className="img_container">
                  <img
                    src={product.productImage&&product?.productImage[0]}
                    alt={product.productImage&&product?.productImage[0]}
                    className="product-card-image"
                  />
                </div>
              <div className="product-card-content">
                <h3 className="product-card-title">{product.productName}</h3>
                <p className="product-card-description">
                  {product?.productDescription&&product.productDescription.slice(0, 80)}....
                </p>
                <h3 className="product_price">{product.productPrice}</h3>
                {/* <button
                  className="btn btn-light product_price "
                  type="button"
                  disabled
                >
                  {product.productMRP}
                </button> */}
              </div>
            </div>
          </Link>

          :
          <div id="preloader"></div>
      }
    </>
  )

}



export default ProductCard
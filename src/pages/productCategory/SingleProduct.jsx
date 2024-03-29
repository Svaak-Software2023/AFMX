import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./singleProduct.css";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ProductCard from "./component/ProductCard";
import productData from "../../assets/data/Productdata.json";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getProduct,
  getSingleProduct,
} from "../../redux/features/productSlice";
import { addCart, addCartItems, getCart } from "../../redux/features/cartSlice";
import Loader from "../../components/Loader/Loader";
import { createCart } from "../../redux/api";
import { LazyLoadImage } from "react-lazy-load-image-component";


function SingleProduct() {
  const { parent, childe } = useParams();
  const { pathname } = useLocation();
  const [isLoading, setIsloading] = useState(true)
  const [isCartLoading, setIsCartloading] = useState(false)
  const [isBuyLoading, setIsBuyloading] = useState(false)

  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products?.allProducts);
  const allCategorey = useSelector((state) => state.products?.allCategorey);

  const navigate = useNavigate();
  const logedInUser = useSelector((state) => state.auth.user);

  const { singleProduct, loading: productLoading } = useSelector(
    (state) => state.products
  );
  const { data: cartData, loading: cartLoading } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getSingleProduct(childe)).then(() => {
      if (logedInUser) {
        let formData = {
          token: logedInUser?.token,
        };
        dispatch(getCart(formData));
      }
    });
  }, [pathname]);

  const addToCartHandler = async (type) => {
   
    const token=`${JSON.parse(localStorage.getItem('user'))?.token}` || null;
    const clientId=`${JSON.parse(localStorage.getItem('user'))?.clientId}` || null;

    if (((token !== 'undefined') && (clientId !== 'undefined')) && singleProduct) {
      console.log('wwwww',token);
      if(type === 'ADD'){
        setIsCartloading(true);
      }
      if(type === 'BUY'){
        setIsBuyloading(true);
      }
      const createCard = {
        deliveryCharges: 10,
        discountPrice: 50,
        clientId: +clientId,
      };
      const { data } = await createCart(createCard, token);

      if (data.cartResponse && data.cartResponse.cartId) {
        let formData = {
          cartId: data.cartResponse.cartId,
          token: token,
          productId: singleProduct.productId,
          noOfProducts: 1,
          productPrice: singleProduct.productPrice,
        };
        dispatch(addCartItems(formData,token)).then(() => {
          if(type === 'ADD'){
            setIsCartloading(false);
          }
          if(type === 'BUY'){
            setIsBuyloading(false);
          }
          navigate("/cart");
        });
      }
    } else {
      navigate("/login");
    }
  };

  const modal = document.getElementById("myModal");
  const openImagePopup = (item) => {
    const modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = item;
  }

  const closeImageModel = () =>{
    modal.style.display = "none";
  }

  

  if (productLoading) return <Loader />;
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row  m-0 bg-white   p-3">
          <div className="col-lg-5 col-md-3 col-12 p-0 mb-3 bg-white">
            <Carousel showArrows={true}>
              {singleProduct.productImage?.map((item, i) => (
                <div key={i} className="single-product-img" onClick={() =>openImagePopup(item)}>
                  <img effect="blur" src={item} />
                </div>
              ))}
            </Carousel>

            <div className="single-product-button-group">
              <div className="single-product-button">
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCartHandler("ADD")}
                >
                  ADD TO Cart
                  { isCartLoading && <span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>}
                </button>
              </div>
              <div className="single-product-button">
                  <button className="buy-now-button" onClick={() => addToCartHandler("BUY")}>Buy Now
                  { isBuyLoading && <span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>}
                  </button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-9 col-12 p-0 m-0 ">
            <div className="px-lg-3" style={{ marginLeft: "10px" }}>
              <div className="">
                <h3 className="single-product-name">
                  {singleProduct.productName}
                </h3>
              </div>
              <div className="single-product-price">
                <h3>${singleProduct.productMRP}</h3>
                <del className="single-producrt-MRP">
                  ${singleProduct.productPrice}
                </del>
                <span className="discount">{singleProduct.discount} Off</span>
              </div>

              <p className="alert-product-left">
                Hurry, Only {singleProduct.quantity} left!
              </p>

              <div className="single-product-description">
                <h3>Description</h3>
                <p>{singleProduct.productDescription}</p>
              </div>

              <div className="single-product-specifications mb-3">
                <h3>Specifications</h3>

                <div className="row p-3">
                  <b>General</b>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">Brand</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.productBrand}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">Product Name</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.productName}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">Category</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">{parent}</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">Container Type</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.containerType}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">Container Size</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.containerSize}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">Cleaner Form</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.cleanerForm}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      Ready to Use / Consentrate
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.readyToUseOrConcentrate ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.fragrances}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">Lemon</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      UPC Code(Universal Product Code)
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.upcCode}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      SKU Code(Stock Keeping Unit)
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      {singleProduct.skuCode}
                    </span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">MRP</span>
                  </div>
                  <div className="col-lg-6 col-6">
                    <span className="product-details-text">
                      ${singleProduct.productMRP}
                    </span>
                  </div>
                </div>
              </div>
              <div className="delivery-check mb-3">
                <h3>Delivery</h3>
                <input type="text" placeholder="Enter delivery ZipCode" />
                <Link>Check</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="similar-product px-2">
          <h3>Similar Products</h3>
          <button>View All</button>
        </div>
        <div className="product-item-list bg-white m-0">
          {allProducts.map((item, i) => (
            <ProductCard key={i} data={item} parent={parent} />
          ))}
        </div>
      </div>

      <div id="myModal" className="image_modal">
  <span onClick={closeImageModel} className="close">&times;</span>
  <img effect="blur" className="single-product-modal-content" id="img01" />
</div>
    </>
  );
}

export default SingleProduct;

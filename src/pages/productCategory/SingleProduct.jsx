import { Link, useLocation, useParams } from "react-router-dom"
import "./singleProduct.css"
import React, { useEffect } from 'react'
import { Carousel } from "react-responsive-carousel"
import ProductCard from "./component/ProductCard"
import productData from "../../assets/data/Productdata.json"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory, getProduct, getSingleProduct } from "../../redux/featurs/productSlice"

function SingleProduct() {
    const { parent, childe } = useParams()
    const {pathname}=useLocation()

    const dispatch = useDispatch()
    // const parentData = productData.find((item) => item.name === parent);
    // const data = parentData?.data.find((item) => item.Pro_id === childe);

    const allProducts = useSelector((state) => state.products?.allProducts)
    const allCategorey = useSelector((state) => state.products?.allCategorey)
    

    const singleProductData = useSelector((state) => state.products?.singleProduct)
    // console.log("singleProductData", singleProductData);
    useEffect(() => {
        dispatch(getSingleProduct(childe))
        allCategorey?.data&&dispatch()
        // dispatch(getProduct(1))
    }, [pathname])
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row  m-0 bg-white   p-3">
                    <div className="col-lg-5 col-md-3 col-12 p-0 mb-3 bg-white">
                        <Carousel showArrows={true} >
                            {singleProductData.productImage?.map((item,i) => <div key={i} className="single-product-img">
                                <img src={item} />
                            </div>
                            )}
                        </Carousel>

                        <div className="single-product-button-group">
                            <div className="single-product-button">
                                <Link to="/cart">
                                    <button className="add-to-cart-button">ADD TO Cart</button>
                                </Link>
                            </div>
                            <div className="single-product-button">
                                <Link to="/cart">
                                    <button className="buy-now-button">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-9 col-12 p-0 m-0 ">
                        <div className="px-lg-3" style={{ marginLeft: "10px" }}>
                            <div className="">
                                <h3 className="single-product-name">{singleProductData.productName}</h3>
                            </div>
                            <div className="single-product-price">
                                <h3>{singleProductData.productMRP}</h3>
                                <del className="single-producrt-MRP">{singleProductData.productPrice}</del>
                                <span className="discount">{singleProductData.discount} Off</span>
                            </div>

                            <p className="alert-product-left">Hurry, Only 8 left!</p>

                            <div className="single-product-description">
                                <h3>Description</h3>
                                <p>{singleProductData.productDescription}</p>
                            </div>

                            <div className="single-product-specifications mb-3">
                                <h3>Specifications</h3>

                                <div className="row p-3">
                                    <b>General</b>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Brand</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">{singleProductData.productBrand}</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Product Name</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">{singleProductData.productName}</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Category</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">{parent}</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Container Type</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Jug</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Container Size</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">5gm</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Cleaner Form</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Liquid</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Ready to Use / Consentrate</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Ready-to-use</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Fragrances</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Lemon</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">UPC Code(Universal Product Code)</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">12345</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">SKU Code(Stock Keeping Unit)</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">{singleProductData.skuCode}</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">MRP</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">$91.3</span></div>
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

                <div className="similar-product px-2"><h3>Similar Products</h3><button>View All</button></div>
                <div className="product-item-list bg-white m-0">
                    {
                        allProducts.map((item) => (
                            <ProductCard key={item.Pro_id} data={item} parent={parent} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SingleProduct
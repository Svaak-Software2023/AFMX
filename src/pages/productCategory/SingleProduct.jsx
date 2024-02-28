import { Link, useParams } from "react-router-dom"
import "./singleProduct.css"
import React, { useEffect } from 'react'
import { Carousel } from "react-responsive-carousel"
import ProductCard from "./component/ProductCard"
import productData from "../../assets/data/Productdata.json"
import { useDispatch } from "react-redux"
import { getAllCategory, getProduct } from "../../redux/featurs/productSlice"

function SingleProduct() {
    const { productId } = useParams()

    const dispatch=useDispatch()
    const data = productData.find((item) => item.id == 7);
    useEffect(()=>{
        dispatch(getAllCategory())
        // dispatch(getProduct(1))
    },[])
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row  m-0 bg-white   p-3">
                    <div className="col-lg-5 col-md-3 col-12 p-0 mb-3 bg-white">
                        <Carousel showArrows={true} >
                            <div className="single-product-img">
                                <img src="./images/product-image/p1.jpg"/>
                            </div>
                            <div className="single-product-img">
                                <img src="./images/product-image/p2.jpg" />
                            </div>
                            <div className="single-product-img">
                                <img src="./images/product-image/p3.jpg" />
                            </div>
                            <div className="single-product-img">
                                <img src="./images/product-image/p4.jpg" />
                            </div>
                            <div className="single-product-img">
                                <img src="./images/product-image/p5.jpg" />
                            </div>
                        </Carousel>

                        <div className="single-product-button-group">
                            <div className="single-product-button">
                                <button className="add-to-cart-button">ADD TO Cart</button>
                            </div>
                            <div className="single-product-button">
                                <button className="buy-now-button">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-9 col-12 p-0 m-0 ">
                        <div className="px-lg-3" style={{ marginLeft: "10px" }}>
                            <div className="">
                                <h3 className="single-product-name">ENVIROCIDE</h3>
                            </div>
                            <div className="single-product-price">
                                <h3>$81.00</h3>
                                <del className="single-producrt-MRP">$100.00</del>
                                <span className="discount">10% Off</span>
                            </div>

                            <p className="alert-product-left">Hurry, Only 8 left!</p>

                            <div className="single-product-description">
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas totam asperiores fugiat neque dolore ipsum amet architecto aspernatur officiis, ducimus et enim in excepturi sit natus placeat explicabo officia.</p>
                            </div>

                            <div className="single-product-specifications mb-3">
                                <h3>Specifications</h3>

                                <div className="row p-3">
                                    <b>General</b>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Brand</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Citrus III</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Product Name</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Envirocide</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">Category</span></div>
                                    <div className="col-lg-6 col-6"><span className="product-details-text">EPA Approved</span></div>
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
                                    <div className="col-lg-6 col-6"><span className="product-details-text">22332</span></div>
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
                        data?.data.map((item) => (
                            <ProductCard key={item.Pro_id} data={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SingleProduct
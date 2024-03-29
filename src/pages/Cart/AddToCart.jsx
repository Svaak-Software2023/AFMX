import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import productData from "../../assets/data/Productdata.json"
import { getCart, cartItemUpdateQuantity } from "../../redux/features/cartSlice";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AddToCart = () => {
  const token = `${JSON.parse(localStorage.getItem('user')).token}`;
  const [{ data }] = productData;
  const [{ Pro_Name, Pro_Img, Pro_Price }] = data;
  const { data: cartData, loading: cartLoading } = useSelector((state) => state.cart)

  const updateQuantity = (productId, isIncrement) => {
    let { cartItemId } = cartData.Items.filter(item => item.productId === productId)[0];
    if (isIncrement) {
      dispatch(cartItemUpdateQuantity({ cartItemId, isIncrement, toast, token }))
    } else {
      dispatch(cartItemUpdateQuantity({ cartItemId, isIncrement, toast, token }))
    }
  };

  return (
    <>
      <div className="container my-3 mx-auto">
        <div className="row m-0">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="row m-0  gap-3">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div
                      className="delivery_address_list_buttton">
                      <div className="delivery_address_list">
                        <h4>Deliver to:</h4>
                        <p>Address to deliver place</p>
                      </div>
                      <button type="button" className="btn">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" my-3" >
                {cartData && cartData?.Products?.map((item, i) =>
                  <div className="card mb-2" key={i}>
                    <div className="card-body">
                      <div className="row mb-5">
                        <div className="col-12 col-md-8 col-lg-8 col-sm-8 items">
                          <div className="row ">
                            <div className="col-12 col-md-3 col-lg-3 col-sm-12 mb-2"
                              style={{ height: "200px", display: "flex", justifyContent: "center" }}>
                              <LazyLoadImage
                                effect="blur"
                                className=" img-fluid"
                                src={item.productImage[0]}
                                alt={item.productName}
                                style={{ height: "100%", objectFit: "contain" }}

                              />

                            </div>
                            <div className="col-12 col-md-8 col-lg-8 col-sm-12">
                              <h6 className="product_item">{item.productName}</h6>
                              <div className="discounted__list" style={{ display: "flex" }}>
                                <p className="discounted_price">{item.productPrice}</p>
                                <p className="discount_price px-2">{item.productMRP}</p>
                                <p className="percent px-4">{item.discount}</p>
                                <p className="percent">1 offer applied</p>
                              </div>
                              <div className="save_or_remove_btn">
                                <a href="#">SAVE FOR LATER</a>
                                <a href="#">REMOVE</a>
                              </div>
                              <div className="increase_decrease_btn mt-3">
                                <div
                                  className="value-button"
                                  id="decrease"
                                  onClick={() => updateQuantity(item?.productId, false)}
                                >
                                  -

                                </div>
                                {/* <input type="number" id="number" defaultValue="1" /> */}
                                <span className="pt-1 px-2  border">{item?.noOfProducts}</span>
                                <div
                                  className="value-button"
                                  id="increase"
                                  onClick={() => updateQuantity(item?.productId, true)}
                                >
                                  +
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-sm-12 p-3">
                          <p className="delivery_time">
                            Delivery by Thu Nov $81.12 Free
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>)}

              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 margin_top">
            <div className="card">
              <div className="card-body">
                <h6 className="price_details">PRICE DETAILS</h6>
                <hr />
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0">
                    <h6 className="price_title">Price (1 item)</h6>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="subtotal">$81.12</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0 ">
                    <h6 className="price_title">Discount</h6>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="price_title_tax">-$91.4</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0 ">
                    <h6 className="price_title">Delivery Charges</h6>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="price_title_tax">Free</p>
                  </div>
                </div>
                <hr />
                <div className="row mx-0 mb-2">
                  <div className="col-sm-8 col-6 p-0 d-inline">
                    <h5 className="total_amount">Total Amount</h5>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p className="total_amount">$81.12</p>
                  </div>
                </div>
                <hr />
                <a href="#" className="total_saving">
                  You total Saving on this order $10
                </a>
              </div>
            </div>
          </div>
          <Link to="/buy_now">
            <button className="place_order_btn my-3">PLACE ORDER</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddToCart;

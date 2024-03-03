import React from "react";
import "./style.css";
import productData from "../../assets/data/Productdata.json"

const AddToCart = () => {
  const [{data}] = productData;
  const [{Pro_Name,Pro_Img,Pro_Price}] = data;
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
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row mb-5">
                      <div className="col-12 col-md-8 col-lg-8 col-sm-8 items">
                        <div className="row ">
                          <div className="col-12 col-md-3 col-lg-3 col-sm-12 mb-2">
                            <img
                              className="w-100"
                              src={Pro_Img}
                              alt="art image"
                            />
                            <div className="increase_decrease_btn">
                              <div
                                className="value-button"
                                id="decrease"
                              >
                                -
                              </div>
                              <input type="number" id="number" defaultValue="0" />
                              <div
                                className="value-button"
                                id="increase"
                              >
                                +
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-8 col-lg-8 col-sm-12">
                            <h6 className="product_item">{Pro_Name}</h6>
                            <div className="discounted__list" style={{ display: "flex" }}>
                              <p className="discounted_price">{Pro_Price}</p>
                              <p className="discount_price px-2">$91.3</p>
                              <p className="percent px-4">10% off</p>
                              <p className="percent">1 offer applied</p>
                            </div>
                            <div className="save_or_remove_btn">
                              <a href="#">SAVE FOR LATER</a>
                              <a href="#">REMOVE</a>
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
                    <button className="place_order_btn">PLACE ORDER</button>
                  </div>
                </div>
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
        </div>
      </div>
    </>
  );
};

export default AddToCart;

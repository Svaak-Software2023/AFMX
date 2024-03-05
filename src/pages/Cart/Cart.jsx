import { Link } from "react-router-dom"
import productData from "../../assets/data/Productdata.json"

const Cart = () => {
    const [{data}] = productData;
    const [{Pro_Name,Pro_Img,Pro_Price}] = data;
    return (
        <>
           <div className="container mt-3">
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
                            <div className="increase_decrease_btn mt-3">
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
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4 col-sm-12 p-3">
                        <p className="delivery_time">
                          Delivery by Thu Nov $81.12 Free
                        </p>
                      </div>
                    </div>
                    <hr />
                    <Link to="/check-out">
                    <button className="place_order_btn">PLACE ORDER</button>
                    </Link>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Cart
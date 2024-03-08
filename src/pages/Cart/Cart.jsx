import { Link, useNavigate } from "react-router-dom"
import productData from "../../assets/data/Productdata.json"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../redux/featurs/cartSlice";

const Cart = () => {
    const [{data}] = productData;
    const [{Pro_Name,Pro_Img,Pro_Price}] = data;
    const dispatch=useDispatch()
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(getCart())

    },[])
    const cartData = useSelector((state) => state.cart.data)

console.log("cartData",cartData);
    return (
        <>
        <div className="container my-3" >
          {cartData&&(cartData?.Products)?.map((item,i)=> 
                <div className="card mb-2" key={i+1}>
                  <div className="card-body">
                    <div className="row mb-5">
                      <div className="col-12 col-md-8 col-lg-8 col-sm-8 items">
                        <div className="row ">
                          <div className="col-12 col-md-3 col-lg-3 col-sm-12 mb-2"
                          style={{height:"200px",display:"flex",justifyContent:"center"}}>
                            <img
                              className=" img-fluid"
                              src={item?.productImage?.[0]}
                              alt={item?.productName}
                              style={{height:"100%",objectFit:"contain"}}
                            
                            />
                            
                          </div>
                          <div className="col-12 col-md-8 col-lg-8 col-sm-12">
                            <h6 className="product_item">{item?.productName}</h6>
                            <div className="discounted__list" style={{ display: "flex" }}>
                              <p className="discounted_price">{item?.productPrice}</p>
                              <p className="discount_price px-2">{item?.productMRP}</p>
                              <p className="percent px-4">{item?.discount}</p>
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
                  </div>
                </div>)}
                    <Link to="/check-out">
                    <button className="place_order_btn my-3">PLACE ORDER</button>
                    </Link>
              </div>
        </>
    )
}

export default Cart
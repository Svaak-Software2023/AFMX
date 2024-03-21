import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart, cartItemUpdateQuantity,getAllSaveForLater, addAndMoveSaveLater,deleteCartItems } from "../../redux/featurs/cartSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const Cart = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()

  
  const updateQuantity = (productId,isIncrement) => {
    let {cartItemId} =  cartData.Items?.filter(item=> item.productId === productId )[0];
    if(isIncrement){
     dispatch(cartItemUpdateQuantity({cartItemId,isIncrement,toast}))
    } else{
      dispatch(cartItemUpdateQuantity({cartItemId,isIncrement,toast}))
    }
  };
  
  const logedInUser = useSelector((state) => state.auth.user)
  const { data: cartData, saveForlaterData:{saveForlaterList}, loading: cartLoading } = useSelector((state) => state.cart)
const {length} = cartData

  useEffect(() => {
    if (logedInUser) {
      let formData = {
        token: logedInUser?.token
      }
      // console.log("formData",formData);
      dispatch(getCart(formData))
      dispatch(getAllSaveForLater({toast}))
    } else {
      navigate("/login")
    }
  }, [])

  // totalPriceHandler
  const [totalSum,setTotalSum]=useState(0)
   useEffect(() => {
    if(cartData.Products){
    let sum = 0
     for (let i = 0; i < cartData.Products.length; i++) {
      const {productPrice, noOfProducts} = cartData.Products[i];
      sum += +productPrice * +noOfProducts
      setTotalSum(sum)
    }
  }
  }, [cartData.Products])

  let totalAmount=totalSum-cartData.discountPrice+cartData.deliveryCharges


  // delete cart items 
  const deleteHandler=(cartItemId)=>{
    dispatch(deleteCartItems({cartItemId})).then(()=>{
      dispatch(getCart());
      dispatch(getAllSaveForLater({toast}));
    })
  }

  // save for later or move to cart this cart item
  const saveForLaterOrMoveToCartHandler=(cartItemId,isTrue)=>{
    dispatch(addAndMoveSaveLater({cartItemId, isTrue,toast})).then(()=>{
      if(isTrue){
        dispatch(getAllSaveForLater({toast}));
      }else {
        dispatch(getCart());
        dispatch(getAllSaveForLater({toast}));
      }
    })
  };
 
  const show_updateQuantityError = ()=>{
    toast.error("Cannot increase quantity. Maximum quantity reached.")
  }

  if (cartLoading) return <Loader/>
  if((cartData?.Items?.length) || (saveForlaterList?.Products?.length)){


    return (
       <>
      <div className="container my-3 ">
        <div className="row m-0">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 m-0">
            <div className="row m-0  gap-3">
              {/* <div className="col-12">
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
              </div> */}
              <div className="m-0" >
                {cartData?.Products?.map((item, i) =>
                  <div className="card mb-2 m-0 " key={i}>
                    <div className="card-body">
                      <div className="row mb-5">
                        <div className="col-12 col-md-8 col-lg-8 col-sm-8 items">
                          <div className="row ">
                            <div className="col-12 col-md-3 col-lg-3 col-sm-12 mb-2"
                              style={{ display: "flex", justifyContent: "center" }}>
                              <img
                                className="img-fluid"
                                src={item.productImage[0]}
                                alt={item.productName}
                                style={{ height: "100%", objectFit: "contain" }}

                              />

                            </div>
                            <div className="col-12 col-md-8 col-lg-8 col-sm-12">
                              <h6 className="product_item">{item.productName}</h6>
                              <div className="discounted__list" style={{ display: "flex" }}>
                                <p className="discounted_price">{((item.productPrice) * (item?.noOfProducts)).toFixed(2)}</p>
                                <p className="discount_price px-2">{item.productMRP}</p>
                                <p className="percent px-4">{item.discount}%</p>
                                <p className="percent">1 offer applied</p>
                              </div>
                              <div className="save_or_remove_btn">
                                <Link onClick={()=>saveForLaterOrMoveToCartHandler(item?.cartItemId, true)}>SAVE FOR LATER</Link>
                                <Link onClick={()=>deleteHandler(item?.cartItemId)}>REMOVE</Link>
                              </div>
                              <div className="increase_decrease_btn mt-3">
                               {(item?.noOfProducts > 1) ? <div
                                  className="value-button"
                                  id="decrease"
                                  onClick={()=> updateQuantity(item?.productId,false) }
                                >
                                  -

                                </div>
                                : <div
                                  className="value-button"
                                >
                                  -

                                </div>}
                                <span className="pt-1 px-2  border">{item?.noOfProducts}</span>
                               { (item?.quantity > item?.noOfProducts ) ? <div
                                  className="value-button"
                                  id="increase"
                                  onClick={()=> updateQuantity(item?.productId,true) }
                                >
                                  +
                                </div>
                                : <div
                                  className="value-button"
                                  id="increase"
                                  onClick={show_updateQuantityError}
                                >
                                  +
                                </div>}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-sm-12 p-3">
                          <p className="delivery_time">
                            Delivery by Thu Nov
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>)}

              </div>

              {/* save for later */}
             {(saveForlaterList?.Products?.length > 0)  && <div className="m-0" >
                  <div className="card mb-2 m-0 ">
                  <h6 className="price_details px-3 pt-3">Saved For Later ({saveForlaterList?.Products?.length})</h6>
                <hr />
                {saveForlaterList && saveForlaterList?.Products?.map((item, i) =>
                    <div className="card-body" key={i}>
                      <div className="row mb-5">
                        <div className="col-12 col-md-8 col-lg-8 col-sm-8 items">
                          <div className="row ">
                            <div className="col-12 col-md-3 col-lg-3 col-sm-12 mb-2"
                              style={{ display: "flex", justifyContent: "center" }}>
                              <img
                                className="img-fluid"
                                src={item.productImage[0]}
                                alt={item.productName}
                                style={{ height: "100%", objectFit: "contain" }}
                              />
                            </div>
                            <div className="col-12 col-md-8 col-lg-8 col-sm-12">
                              <h6 className="product_item">{item.productName}</h6>
                              <div className="discounted__list" style={{ display: "flex" }}>
                                <p className="discounted_price">{((item.productPrice) * (item?.noOfProducts)).toFixed(2)}</p>
                                <p className="discount_price px-2">{item.productMRP}</p>
                                <p className="percent px-4">{item.discount}%</p>
                              </div>
                              <div className="save_or_remove_btn">
                              <Link onClick={()=>saveForLaterOrMoveToCartHandler(item?.cartItemId, false)}>MOVE TO CART</Link>
                                <Link onClick={()=>deleteHandler(item?.cartItemId)}>REMOVE</Link>
                              </div>
                              <div className="increase_decrease_btn mt-3">
                                <div
                                  className="value-button"
                                  id="decrease"
                                  style={{cursor:"default"}}
                                >
                                  -

                                </div>
                                <span className="pt-1 px-2  border">{item?.noOfProducts}</span>
                                <div
                                  className="value-button"
                                  id="increase"
                                  style={{cursor:"default"}}
                                >
                                  +
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                     )}
                  </div>

              </div>}
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 margin_top">
            <div className="card">
              <div className="card-body">
                <h6 className="price_details">PRICE DETAILS</h6>
                <hr />
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0">
                    <h6 className="price_title">Price ({cartData.Products&&cartData.Products.length} item)</h6>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="subtotal">${totalSum.toFixed(2)}</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0 ">
                    <h6 className="price_title">Discount</h6>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="price_title_tax">-${cartData.discountPrice}</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0 ">
                    <h6 className="price_title">Delivery Charges</h6>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="price_title_tax">${cartData.deliveryCharges}</p>
                  </div>
                </div>
                <hr />
                <div className="row mx-0 mb-2">
                  <div className="col-sm-8 col-6 p-0 d-inline">
                    <h5 className="total_amount">Total Amount</h5>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p className="total_amount">${totalAmount.toFixed(2)}</p>
                  </div>
                </div>
                <hr />
                <a href="#" className="total_saving">
                  You total Saving on this order ${cartData.discountPrice}
                </a>
              </div>
            </div>
          </div>
          <Link to={`/buy_now/${totalAmount.toFixed(2)}`}>
            <button className="place_order_btn my-3">PLACE ORDER</button>
          </Link>
        </div>
      </div>
    </>
  )}
  else{
    return(
      <>
      <div className="d-flex justify-content-center align-items-center" style={{height:"400px"}}>
      <div>
        <h3 className="text-center p-5">Your cart is empty!</h3>
        <div className="d-flex justify-content-center">
          <button className="btn text-white mb-3" style={{backgroundColor:"#D00808"}} 
          onClick={()=>navigate("/")}>Shop Now</button>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default Cart;

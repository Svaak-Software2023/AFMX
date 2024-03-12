import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { getSingleAddress, addAddress, getAllAddress, deleteAddress,patchAddress } from "../../redux/featurs/addressSlice";
import { getCart, deleteCartItem,cartItemUpdateQuantity } from "../../redux/featurs/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";

const DeliveryAddress = () => {
  const dispatch = useDispatch();

  const  [user, setUser] = useState({
    clientPhone: "",
    clientAddress: "",
    clientCity: "",
    clientState: "",
    clientCountry: "",
    clientPostalCode: "",
  });
  const [addNewForm, setaddNewForm] = useState({
    clientPhone: "",
    clientAddress: "",
    clientCity: "",
    clientState: "",
    clientCountry: "",
    clientPostalCode: "",
  });
  const [updateNewForm, setUpdateNewForm] = useState({
    deliveryAddressId:null,
    clientPhone: "",
    clientAddress: "",
    clientCity: "",
    clientState: "",
    clientCountry: "",
    clientPostalCode: "",
  });
  
  const [formData, setFormData] = useState([{
    clientPhone: "",
    clientAddress: "",
    clientCity: "",
    clientState: "",
    clientCountry: "",
    clientPostalCode: "",
  }]);
  const [updateFormData, setUpdateFormData] = useState({
    clientPhone: "",
    clientAddress: "",
    clientCity: "",
    clientState: "",
    clientCountry: "",
    clientPostalCode: "",
  });
  const [edit, setEdit] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  


  const activeBgClass = (event) => {
    setFormData(address ? address : []);
    if (event.target.id == "add_new_address") {
      document
        .getElementById("order_summery")
        .classList?.remove("delivery_address_bg");
      document
        .getElementById("payment_options")
        .classList?.remove("delivery_address_bg");
      document
        .getElementById("add_new_address")
        .classList.add("delivery_address_bg");
    }
    if (event.target.id == "order_summery") {
      document
        .getElementById("payment_options")
        .classList?.remove("delivery_address_bg");
      document
        .getElementById("add_new_address")
        .classList.remove("delivery_address_bg");
      document
        .getElementById("order_summery")
        .classList.add("delivery_address_bg");
    }
    if (event.target.id == "payment_options") {
      document
        .getElementById("order_summery")
        .classList?.remove("delivery_address_bg");
      document
        .getElementById("add_new_address")
        .classList?.remove("delivery_address_bg");
      document
        .getElementById("payment_options")
        .classList.add("delivery_address_bg");
    }
  };

 
  

  useEffect(() => {
    dispatch(getAllAddress({ toast }));
    // dispatch(getSingleAddress({ toast }));
    setUser(JSON.parse(localStorage.getItem("user")));
    dispatch(getCart())
  }, []);

  const address = useSelector((state) => state.address.data);
  console.log('addressaddress',address)
  const cartData = useSelector((state) => state.cart.data)
  console.log('getCart',cartData)

  const changehandler = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  const setFormValue = (key) =>{
    let {clientPhone,clientAddress,clientCity,clientState,clientCountry,clientPostalCode,deliveryAddressId} = key;
    setUpdateNewForm({ ...updateNewForm, clientPhone,clientAddress,clientCity,clientState,clientCountry,clientPostalCode,deliveryAddressId });
  }

  const submithandler = (event, isEdit, key) => {
    event.preventDefault();
    setFormValue(key);
    if(isEdit){
      console.log('isEdit isEditIF',isEdit);
    }else{
      if(updateNewForm.deliveryAddressId){
        console.log('updateNewForm11IF',updateNewForm);
        dispatch(patchAddress({updateNewForm, toast}));
      }else{
        console.log('updateNewForm11Else',updateNewForm);
        dispatch(addAddress({addNewForm, toast}));
      }  
    }
  }

  const toggleEdit = (isTrue) => {
    if(isTrue){
      setEdit(isTrue);
      setUpdateFormData((preValue) => ({...preValue,...user}))
    } else {
      setEdit(isTrue)
    }
  };

  const handleFormChange = (index, event,{clientPhone,clientAddress,clientCity,clientState,clientCountry,clientPostalCode,deliveryAddressId}) => {
    let data = [...formData];
    // data[index][event.target.name] = event.target.value;
    data[index] = {...data[index],[event.target.name]: event.target.value};
    setFormData(data);
    setaddNewForm({ ...addNewForm, [event.target.name] : event.target.value });
    setUpdateNewForm({ ...updateNewForm, clientPhone,clientAddress,clientCity,clientState,clientCountry,clientPostalCode,deliveryAddressId, [event.target.name] : event.target.value });
  };

  const addMoreForm = () => {
    let newfield = {
      clientPhone: "",
      clientAddress: "",
      clientCity: "",
      clientState: "",
      clientCountry: "",
      clientPostalCode: "",
    };
    setFormData([...formData, newfield]);
  }

  const removeFields = (deliveryAddressId,index) => {
    let data = [...formData];
    if(data.length > 0) {
      data.splice(index, 1)
    setFormData(data);
    dispatch(deleteAddress({deliveryAddressId, toast }));
    console.log('deliveryAddressId',deliveryAddressId);
    }
};

const removeCartItem = (productId) => {
  const cartItemId =  cartData.Items.filter(item=> item.productId === productId )[0].cartItemId;
  dispatch(deleteCartItem({cartItemId,toast}));
  setTimeout(() => {
    dispatch(getCart());
  }, 1000);
};

const updateQuantity = (productId,isIncrement) => {
  let {cartItemId} =  cartData.Items.filter(item=> item.productId === productId )[0];
  if(isIncrement){
   dispatch(cartItemUpdateQuantity({cartItemId,isIncrement,toast}))
  } else{
    dispatch(cartItemUpdateQuantity({cartItemId,isIncrement,toast}))
  }
};

  return (
    <>
      <div className="container my-3 ">
        <div className="row px-0">
          <div className="col-8 px-0">
            <div className="row px-0 gap-3">
              {/* <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row px-md-5">
                      <div className="col-sm-9 col-md-8 col-lg-6 col-12">
                        <div className="d-flex justify-content-between">
                          <a className="fs-5 color_black font_weight_500">
                            Login
                          </a>
                          <p className="fs-5">User name</p>
                          <p className="fs-5">+91 76876762</p>
                        </div>
                      </div>
                      <div className="col-sm-3 col-md-4 col-lg-6 col-3">
                        <button className="btn btn-light d-flex ms-auto change_btn">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-12">
                <div className="container-fluid delivery_address_bg px-md-5">
                  <h6>DELIVERY ADDRESS</h6>
                </div>
                <div className="card">
                  <form onSubmit={(event) => submithandler(event, true)}>
                    <div className="card-body px-md-5">
                      <div className="row ">
                        <div className="col-md-3 col-6">
                          <p className="delivery_address_key"><b>User name</b> </p>
                        </div>
                        <div className="col-md-8 col-6">
                          <p className="delivery_address_value">{user.clientFirstName} {user.clientLastName}</p>
                        </div>
                        <div className="col-md-3 col-6">
                          <p className="delivery_address_key"><b>Phone No</b></p>
                        </div>
                        <div className="col-md-8 col-6">
                          {edit ? <TextField
                            className="form-control"
                            type="text"
                            onChange={changehandler}
                            value={updateFormData.clientPhone}
                            name="clientPhone"
                          /> : <p className="delivery_address_value">{user.clientPhone}</p>}
                        </div>
                        <div className="col-md-3 col-6">
                          <p className="delivery_address_key"><b>Pin code</b></p>
                        </div>
                        <div className="col-md-8 col-6">
                          {edit ? <TextField
                            className="form-control"
                            type="text"
                            onChange={changehandler}
                            value={updateFormData.clientPostalCode}
                            name="clientPostalCode"
                          /> : <p className="delivery_address_value">{user.clientPostalCode}</p> }
                        </div>
                        <div className="col-md-3 col-6">
                          <p className="delivery_address_key"><b>City</b></p>
                        </div>
                        <div className="col-md-8 col-6">
                          { edit ? <TextField
                            className="form-control"
                            type="text"
                            onChange={changehandler}
                            value={updateFormData.clientCity}
                            name="clientCity"
                          /> : <p className="delivery_address_value">{user.clientCity}</p> }
                        </div>
                        <div className="col-md-3 col-6">
                          <p className="delivery_address_key"><b>State</b></p>
                        </div>
                        <div className="col-md-8 col-6">
                          
                         { edit ? <TextField
                            className="form-control"
                            type="text"
                            onChange={changehandler}
                            value={updateFormData.clientState}
                            name="clientState"
                          /> : <p className="delivery_address_value">U.P</p>}
                        </div>
                        <div className="col-md-3 col-6">
                          <p className="delivery_address_key"><b>Country</b></p>
                        </div>
                        <div className="col-md-8 col-6">
                          { edit ? <TextField
                            className="form-control"
                            type="text"
                            onChange={changehandler}
                            value={updateFormData.clientCountry}
                            name="clientCountry"
                          /> : <p className="delivery_address_value">India</p> }
                        </div>
                        <div className="col-md-3 col-6">
                          <p className="delivery_address_key"><b>Address</b></p>
                        </div>
                        <div className="col-md-8 col-6">
                          {edit ? <TextField
                            className="form-control"
                            type="text"
                            onChange={changehandler}
                            value={updateFormData.clientAddress}
                            name="clientAddress"
                          /> :  <p className="delivery_address_value">{user.clientAddress}</p> }
                        </div>
                      </div>
                      { !edit ?<button type="button" onClick={()=> toggleEdit(true)} className="btn btn-light">
                        EDIT
                      </button> 
                      : <button type="submit" onClick={()=> toggleEdit(false)} className="btn btn-light">
                        Save
                      </button>}
                      
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12">
                <h6 className="accordion-header" id="flush-headingOne">
                  <p
                    className="collapsed order_or_payment_title delivery_address_padding"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    id="add_new_address"
                    onClick={(event) => activeBgClass(event)}
                  >
                    + ADD NEW ADDRESS
                  </p>
                </h6>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {(formData || [])?.map((key,index) =>( 
                        <span key={index}>
                        <input type="radio" value={key.deliveryAddressId} checked={selectedOption === key.deliveryAddressId} onChange={() => setSelectedOption(key.deliveryAddressId)}/>
                        <div className="card" >
                          <div className="card-body px-md-5">
                            <form onSubmit={(event) => submithandler(event, false,key)}>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <TextField
                                      className="form-control"
                                      type="text"
                                      label="Phone No"
                                      onChange={event => handleFormChange(index, event,key)}
                                      value={key.clientPhone}
                                      name="clientPhone"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <TextField
                                      className="form-control"
                                      type="text"
                                      label="Pin Code"
                                      onChange={event => handleFormChange(index, event,key)}
                                      value={key.clientPostalCode}
                                      name="clientPostalCode"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <TextField
                                      className="form-control"
                                      type="text"
                                      label="City"
                                      onChange={event => handleFormChange(index, event,key)}
                                      value={key.clientCity}
                                      name="clientCity"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <TextField
                                      className="form-control"
                                      type="text"
                                      label="State"
                                      onChange={event => handleFormChange(index, event,key)}
                                      value={key.clientState}
                                      name="clientState"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <TextField
                                      className="form-control"
                                      type="text"
                                      label="Country"
                                      onChange={event => handleFormChange(index, event,key)}
                                      value={key.clientCountry}
                                      name="clientCountry"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <TextField
                                      className="form-control"
                                      type="text"
                                      label="Address"
                                      onChange={event => handleFormChange(index, event,key)}
                                      value={key.clientAddress}
                                      name="clientAddress"
                                    />
                                  </div>
                                </div>

                                <div className="col-md-12 d-flex justify-content-center gap-4">
                                  <button type="submit" className="btn btn-light">
                                    Save
                                  </button>
                                  <button type="button" className="btn btn-danger" onClick={() => removeFields(key.deliveryAddressId,index)}>Remove</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        </span>
                        ) ) }
                        <div className="col-md-12 d-flex justify-content-center">
                          <button type="button" onClick={addMoreForm} className="btn btn-light">
                                 Add More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h6 className="accordion-header" id="order_summary">
                  <p
                    className="collapsed order_or_payment_title delivery_address_padding"
                    data-bs-toggle="collapse"
                    data-bs-target="#order_summarycollapse"
                    aria-expanded="false"
                    aria-controls="order_summarycollapse"
                    id="order_summery"
                    onClick={(event) => activeBgClass(event)}
                  >
                    ORDER SUMMARY
                  </p>
                </h6>
                <div
                  className="accordion accordion-flush"
                  id="order_summaryExample"
                >
                  <div className="accordion-item">
                    <div
                      id="order_summarycollapse"
                      className="accordion-collapse collapse"
                      aria-labelledby="order_summary"
                      data-bs-parent="#order_summaryExample"
                    >
                      <div className="accordion-body">
                        <div className="card">
                          <div className="card-body">
                            {cartData&&(cartData?.Products || [])?.map((item,i)=>(
                              <div className="row mb-5" key={i+1}>
                              <div className="col-12 col-md-8 col-lg-8 col-sm-8 items">
                                <div className="row ">
                                  <div className="col-12 col-md-3 col-lg-3 col-sm-12 mb-2"
                                  >
                                  <img
                                      className=" img-fluid"
                                      src={item?.productImage?.[0]}
                                      alt={item?.productName}
                                      style={{height:"100%",objectFit:"contain"}}
                            />
                                    <div className="increase_decrease_btn">
                                      <div
                                        className="value-button"
                                        id="decrease"
                                        onClick={()=>updateQuantity(item.productId,false)}
                                      >
                                        -
                                      </div>
                                      <h6 className="px-3 py-2" style={{background: '#eeeeee'}}>{item?.noOfProducts}</h6>
                                      <div
                                        className="value-button"
                                        id="increase"
                                        onClick={()=>updateQuantity(item.productId,true)}
                                      >
                                        +
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-8 col-lg-8 col-sm-12">
                                    <h6 className="product_item">{item?.productName}</h6>
                                    <div
                                      className="discounted__list"
                                      style={{ display: "flex" }}
                                    >
                                      <p className="discounted_price">
                                      {item?.productPrice}
                                      </p>
                                      <p className="discount_price px-2">
                                      {item?.productMRP}
                                      </p>
                                      <p className="percent px-4">10% off</p>
                                      <p className="percent">1 offer applied</p>
                                    </div>
                                    <div className="save_or_remove_btn">
                                      <a href="#">SAVE FOR LATER</a>
                                      <a href="javascript:void(0)" onClick={()=>removeCartItem(item.productId)}>REMOVE</a>
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
                            ))}
                            <hr />
                            <button className="place_order_btn">
                              CHECKOUT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h6 className="accordion-header" id="payment_headingOne">
                  <p
                    className=" collapsed order_or_payment_title delivery_address_padding"
                    data-bs-toggle="collapse"
                    data-bs-target="#payment_collapseOne"
                    aria-expanded="false"
                    aria-controls="payment_collapseOne"
                    id="payment_options"
                    onClick={(event) => activeBgClass(event)}
                  >
                    PAYMENT OPTIONS
                  </p>
                </h6>
                <div className="accordion accordion-flush" id="payment_Example">
                  <div className="accordion-item">
                    <div
                      id="payment_collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="payment_headingOne"
                      data-bs-parent="#payment_Example"
                    >
                      <div className="accordion-body">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="flexRadioDisabled"
                                  />
                                  <label
                                    className="form-check-label payment_type_list"
                                    htmlFor="flexRadioDisabled"
                                  >
                                    Pay By Wallet
                                  </label>
                                  <img
                                    src="/paymentIcon/wallet-removebg.jpg"
                                    width="50"
                                    className="ms-3"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="flexRadioDisabled"
                                  />
                                  <label
                                    className="form-check-label payment_type_list"
                                    htmlFor="flexRadioDisabled"
                                  >
                                    Credit/Debit/ ATM Card
                                  </label>
                                  <img
                                    src="/paymentIcon/atm_card_debit_card.jpg"
                                    width="50"
                                    className="ms-3"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mx-3 my-3 gap-3">
                              <div className="col-sm-12 col-md-7 col-lg-7 col-12">
                                <input
                                  type="number"
                                  className="form-control card_input"
                                  placeholder="Enter card number"
                                />
                              </div>
                              <div className="col-sm-12 col-md-7 col-lg-7 col-12">
                                <div className="row">
                                  <div className="col-8">
                                    <input
                                      type="month"
                                      className="form-control card_input"
                                      placeholder="name@example.com"
                                      alt="kjhj"
                                    />
                                  </div>
                                  <div className="col-4">
                                    <input
                                      type="text"
                                      className="form-control card_input"
                                      placeholder="CVV"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-7 col-lg-7 col-12">
                                <div className="row">
                                  <div className="col-12 d-flex">
                                    <Link
                                      to="/thank_you"
                                      className="btn btn-danger w-100"
                                    >
                                      PAY NOW
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="flexRadioDisabled"
                                  />
                                  <label
                                    className="form-check-label payment_type_list"
                                    htmlFor="flexRadioDisabled"
                                  >
                                    Pay By Stripe
                                  </label>
                                  <img
                                    src="/paymentIcon/stripe_pic.jpg"
                                    width="50"
                                    className="ms-3"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="flexRadioDisabled"
                                  />
                                  <label
                                    className="form-check-label payment_type_list"
                                    htmlFor="flexRadioDisabled"
                                  >
                                    Pay By American Express
                                  </label>
                                  <img
                                    src="/paymentIcon/american_card.jpg"
                                    width="50"
                                    className="ms-3"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="flexRadioDisabled"
                                  />
                                  <label
                                    className="form-check-label payment_type_list"
                                    htmlFor="flexRadioDisabled"
                                  >
                                    Pay By Wire Transfer
                                  </label>
                                  <img
                                    src="/paymentIcon/wire-transfer-logo.jpg"
                                    width="50"
                                    className="ms-3"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="flexRadioDisabled"
                                  />
                                  <label
                                    className="form-check-label payment_type_list"
                                    htmlFor="flexRadioDisabled"
                                  >
                                    Pay By Pay Pal
                                  </label>
                                  <img
                                    src="/paymentIcon/paypal-logo.jpg"
                                    width="50"
                                    className="ms-3"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="container-fluid px-md-5"></div>
            <div className="card">
              <div className="card-body">
                <h6 className="price_details">PRICE DETAILS</h6>
                <hr />
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0">
                    <p className="price_title"><b>Price (1 item)</b></p>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="subtotal">$81.12</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0 ">
                    <p className="price_title"><b>Discount</b></p>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="price_title_tax">-$91.4</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0 ">
                    <p className="price_title"><b>Delivery Charges</b></p>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="price_title_tax">Free</p>
                  </div>
                </div>
                <hr />
                <div className="row mx-0 mb-2">
                  <div className="col-sm-8 col-6 p-0 d-inline">
                    <p className="total_amount"><b>Total Amount</b></p>
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

export default DeliveryAddress;

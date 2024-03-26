import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import {fetchCart,createCheckout} from "../../redux/api";
import {
  getSingleAddress,
  addAddress,
  getAllAddress,
  deleteAddress,
  patchAddress,
} from "../../redux/features/addressSlice";
import {
  deleteCartItems,
  getCart,
  cartItemUpdateQuantity,
  getAllSaveForLater,
  addAndMoveSaveLater,
} from "../../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import PaymentPage from "../paymentPage/PaymentPage";

const DeliveryAddress = () => {
  const dispatch = useDispatch();
  const token=`${JSON.parse(localStorage.getItem('user')).token}`;

  // let { totalAmount } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [user, setUser] = useState({
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
    deliveryAddressId: null,
    clientPhone: "",
    clientAddress: "",
    clientCity: "",
    clientState: "",
    clientCountry: "",
    clientPostalCode: "",
  });
  const [formData, setFormData] = useState([
    {
      clientPhone: "",
      clientAddress: "",
      clientCity: "",
      clientState: "",
      clientCountry: "",
      clientPostalCode: "",
    },
  ]);
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
        ?.getElementById("order_summery")
        ?.classList?.remove("delivery_address_bg");
      document
        ?.getElementById("payment_options")
        ?.classList?.remove("delivery_address_bg");
      document
        ?.getElementById("add_new_address")
        ?.classList?.add("delivery_address_bg");
    }
    if (event.target.id == "order_summery") {
      document
        ?.getElementById("payment_options")
        ?.classList?.remove("delivery_address_bg");
      document
        ?.getElementById("add_new_address")
        ?.classList?.remove("delivery_address_bg");
      document
        ?.getElementById("order_summery")
        ?.classList?.add("delivery_address_bg");
    }
    if (event.target.id == "payment_options") {
      document
        ?.getElementById("order_summery")
        ?.classList?.remove("delivery_address_bg");
      document
        ?.getElementById("add_new_address")
        ?.classList?.remove("delivery_address_bg");
      document
        ?.getElementById("payment_options")
        ?.classList?.add("delivery_address_bg");
    }
  };

  const navigate = useNavigate();
  const logedInUser = useSelector((state) => state.auth.user);
  const {
    data: cartData,
    saveForLaterData: { saveForLaterList },
    loading: cartLoading,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getAllAddress({ toast, token }));
    setUser(JSON.parse(localStorage.getItem("user")));
    if (logedInUser) {
      dispatch(getCart({token}));
      dispatch(getAllSaveForLater({ toast,token }));
    } else {
      navigate("/login");
    }

  }, []);

  const { data: address, loading } = useSelector((state) => state.address);
  // console.log("addressaddress", address);

  const changehandler = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const setFormValue = (key) => {
    let {
      clientPhone,
      clientAddress,
      clientCity,
      clientState,
      clientCountry,
      clientPostalCode,
      deliveryAddressId,
    } = key;
    setUpdateNewForm({
      ...updateNewForm,
      clientPhone,
      clientAddress,
      clientCity,
      clientState,
      clientCountry,
      clientPostalCode,
      deliveryAddressId,
    });
  };

  const submithandler = (event, isEdit, key) => {
    event.preventDefault();
    setFormValue(key);
    if (isEdit) {
      // console.log("isEdit isEditIF", isEdit);
    } else {
      if (updateNewForm.deliveryAddressId) {
        // console.log("updateNewForm11IF", updateNewForm);
        dispatch(patchAddress({ updateNewForm, toast, token }));
      } else {
        // console.log("updateNewForm11Else", updateNewForm);
        dispatch(addAddress({ addNewForm, toast,token }));
      }
    }
  };

  const toggleEdit = (isTrue) => {
    if (isTrue) {
      setEdit(isTrue);
      setUpdateFormData((preValue) => ({ ...preValue, ...user }));
    } else {
      setEdit(isTrue);
    }
  };

  const handleFormChange = (
    index,
    event,
    {
      clientPhone,
      clientAddress,
      clientCity,
      clientState,
      clientCountry,
      clientPostalCode,
      deliveryAddressId,
    }
  ) => {
    let data = [...formData];
    data[index] = { ...data[index], [event.target.name]: event.target.value };
    setFormData(data);
    setaddNewForm({ ...addNewForm, [event.target.name]: event.target.value });
    setUpdateNewForm({
      ...updateNewForm,
      clientPhone,
      clientAddress,
      clientCity,
      clientState,
      clientCountry,
      clientPostalCode,
      deliveryAddressId,
      [event.target.name]: event.target.value,
    });
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
  };

  const removeFields = (deliveryAddressId, index) => {
    let data = [...formData];
    if (data.length > 0) {
      data.splice(index, 1);
      setFormData(data);
      dispatch(deleteAddress({ deliveryAddressId, toast, token }));
      // console.log("deliveryAddressId", deliveryAddressId);
    }
  };

  const removeCartItem = (cartItemId) => {
    dispatch(deleteCartItems({cartItemId,toast,token})).then(() => {
      dispatch(getCart({token}));
    });
  };

  const updateQuantity = (productId, isIncrement) => {
    let { cartItemId } = cartData.Items?.filter(
      (item) => item.productId === productId
    )[0];
    if (isIncrement) {
      dispatch(cartItemUpdateQuantity({ cartItemId, isIncrement, toast,token }));
    } else {
      dispatch(cartItemUpdateQuantity({ cartItemId, isIncrement, toast,token }));
    }
  };

  // totalPriceHandler
  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    if (cartData.Products) {
      let sum = 0;
      for (let i = 0; i < cartData.Products.length; i++) {
        const { productPrice, noOfProducts } = cartData.Products[i];
        sum += +productPrice * +noOfProducts;
        setTotalSum(sum);
      }
    }
  }, [cartData.Products]);

  // save for later or move to cart this cart item
  const saveForLaterOrMoveToCartHandler = (cartItemId, isTrue) => {
    dispatch(addAndMoveSaveLater({ cartItemId, isTrue, toast,token })).then(() => {
      if (isTrue) {
        dispatch(getAllSaveForLater({ toast,token }));
      } else {
        dispatch(getCart({token}));
        dispatch(getAllSaveForLater({ toast,token }));
      }
    });
  };

  const show_updateQuantityError = ()=>{
    toast.error("Cannot increase quantity. Maximum quantity reached.")
  }

  const makePayment = async() =>{
    const stripe = await loadStripe('pk_test_51Ow4TtJKdTIDd26g32G3OKUjU9wQ1VhVAiW0NTygza4L5OsBda2oMQioEfrMy2aMVIFP7Nq31wAgHUslv0bvwj0R00PPAohriL');
    const {data} = await fetchCart(token);
    const products = data.cartResponse.Products.map(({productId,productPrice,productName,noOfProducts:noofProducts})=>{
      return {productId,noofProducts,productPrice,productName}
    });

   
    const {data:{productCheckout}}  = await createCheckout(cartData.cartId,{products},token);
    // window.location.href = productCheckout

    if(productCheckout){
      return stripe.redirectToCheckout({
        sessionId:productCheckout.sessionId
      });
    }


}

let totalAmount=totalSum-cartData.discountPrice+cartData.deliveryCharges

  return (
    <>
      <div className="container my-3 ">
        <div className="row px-0">
          <div className="col-lg-8 col-12 px-0">
            <div className="row px-0 gap-3">
              <div className="col-12">
                <h6 className="accordion-header" id="flush-headingOne">
                  <p
                    className="collapsed order_or_payment_title delivery_address_padding"
                    data-bs-toggle="collapse"
                    data-bs-target="#DeliveryAddress"
                    aria-expanded="false"
                    aria-controls="DeliveryAddress"
                    id="add_new_address"
                    onClick={(event) => activeBgClass(event)}
                  >
                    DELIVERY ADDRESS
                  </p>
                </h6>
                <div
                  className="accordion accordion-flush"
                  id="accordionDeliveryAddress"
                >
                  <div className="accordion-item">
                    <div
                      id="DeliveryAddress"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionDeliveryAddress"
                    >
                      <div className="accordion-body">
                        {address.length &&
                          address?.map((item, i) => (
                            <div
                              className="col-md-12 d-flex justify-content-start mb-3 p-2"
                              style={{ backgroundColor: "#f7f1f1" }}
                              key={i}
                            >
                              <div className="">
                                <div className="d-flex align-items-center justify-content-start">
                                  <input
                                    type="radio"
                                    id={i}
                                    name="deliveryAddress"
                                    value={item?.deliveryAddressId}
                                  />
                                  <span className="text-center mx-2 h-6">{`${user?.clientFirstName} ${user?.clientLastName}`}</span>
                                  <span>
                                    <b>{item.clientPhone}</b>
                                  </span>
                                </div>
                                <p
                                  className=""
                                  style={{ marginLeft: "20px" }}
                                >{`${item.clientCity}, ${item.clientState}, ${item.clientCountry}-${item.clientPostalCode}`}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card"></div>
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
                        {(formData || [])?.map((key, index) => (
                          <span key={index}>
                            {/* <input type="radio" value={key.deliveryAddressId} checked={selectedOption === key.deliveryAddressId} onChange={() => setSelectedOption(key.deliveryAddressId)} /> */}
                            <div className="card mb-3">
                              <div className="card-body px-md-5">
                                <form
                                  onSubmit={(event) =>
                                    submithandler(event, false, key)
                                  }
                                >
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <TextField
                                          className="form-control"
                                          type="text"
                                          label="Phone No"
                                          onChange={(event) =>
                                            handleFormChange(index, event, key)
                                          }
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
                                          onChange={(event) =>
                                            handleFormChange(index, event, key)
                                          }
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
                                          onChange={(event) =>
                                            handleFormChange(index, event, key)
                                          }
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
                                          onChange={(event) =>
                                            handleFormChange(index, event, key)
                                          }
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
                                          onChange={(event) =>
                                            handleFormChange(index, event, key)
                                          }
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
                                          onChange={(event) =>
                                            handleFormChange(index, event, key)
                                          }
                                          value={key.clientAddress}
                                          name="clientAddress"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-12 d-flex justify-content-center gap-4">
                                      {loading ? (
                                        <span
                                          className="spinner-border"
                                          role="status"
                                        ></span>
                                      ) : (
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          Save
                                        </button>
                                      )}
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() =>
                                          removeFields(
                                            key.deliveryAddressId,
                                            index
                                          )
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </span>
                        ))}
                        <div className="col-md-12 d-flex justify-content-center">
                          <button
                            type="button"
                            onClick={addMoreForm}
                            className="btn btn-light"
                          >
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
                      <div className="accordion-body mb-3">
                        {(cartData?.Products?.length > 0) && <div className="card">
                          <div className="card-body">
                            {cartData &&
                              (cartData?.Products || [])?.map((item, i) => (
                                <div className="row mb-5" key={i + 1}>
                                  <div className="col-12 col-md-8 col-lg-8 col-sm-8 items">
                                    <div className="row ">
                                      <div className="col-12 col-md-3 col-lg-3 col-sm-12 mb-2">
                                        <img
                                          className=" img-fluid"
                                          src={item?.productImage?.[0]}
                                          alt={item?.productName}
                                          style={{
                                            height: "100%",
                                            objectFit: "contain",
                                          }}
                                        />
                                        <div className="increase_decrease_btn mt-2">
                                        { (item?.noOfProducts > 1) ? <div
                                            className="value-button"
                                            id="decrease"
                                            onClick={() =>
                                              updateQuantity(
                                                item?.productId,
                                                false
                                              )
                                            }
                                          >
                                            -
                                          </div>
                                          :<div
                                  className="value-button"
                                >
                                  -

                                </div>}
                                          <span className="pt-1 px-2  border">
                                            {item?.noOfProducts}
                                          </span>
                                         {(item?.quantity > item?.noOfProducts ) ? <div
                                            className="value-button"
                                            id="increase"
                                            onClick={() =>
                                              updateQuantity(
                                                item?.productId,
                                                true
                                              )
                                            }
                                          >
                                            +
                                          </div>
                                          :<div
                                  className="value-button"
                                  id="increase"
                                  onClick={show_updateQuantityError}
                                >
                                  +
                                </div>}
                                        </div>
                                      </div>

                                      <div className="col-12 col-md-8 col-lg-8 col-sm-12 mt-5">
                                        <h6 className="product_item">
                                          {item?.productName}
                                        </h6>
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
                                          <p className="percent px-4">
                                            {item.discount}% off
                                          </p>
                                          <p className="percent">
                                            1 offer applied
                                          </p>
                                        </div>
                                        <div className="save_or_remove_btn">
                                          <Link
                                            onClick={() =>
                                              saveForLaterOrMoveToCartHandler(
                                                item?.cartItemId,
                                                true
                                              )
                                            }
                                          >
                                            SAVE FOR LATER
                                          </Link>
                                          <Link
                                            onClick={() =>
                                              removeCartItem(item.cartItemId)
                                            }
                                          >
                                            REMOVE
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              ))}
                          </div>
                        </div>}
                        {/* {(saveForLaterList?.Products?.length > 0) && (
                            <div className="m-0 pt-3">
                              <div className="card mb-2 m-0 ">
                                <h6 className="price_details px-3 pt-3">
                                  Saved For Later (
                                  {saveForLaterList?.Products?.length})
                                </h6>
                                <hr />
                                {saveForLaterList &&
                                  saveForLaterList?.Products?.map((item, i) => (
                                    <div className="card-body" key={i}>
                                      <div className="row mb-5">
                                        <div className="col-12 col-md-8 col-lg-8 col-sm-8 items">
                                          <div className="row ">
                                            <div
                                              className="col-12 col-md-3 col-lg-3 col-sm-12 mb-2"
                                              style={{
                                                display: "flex",
                                                justifyContent: "center",
                                              }}
                                            >
                                              <img
                                                className="img-fluid"
                                                src={item.productImage[0]}
                                                alt={item.productName}
                                                style={{
                                                  height: "100%",
                                                  objectFit: "contain",
                                                }}
                                              />
                                            </div>
                                            <div className="col-12 col-md-8 col-lg-8 col-sm-12">
                                              <h6 className="product_item">
                                                {item.productName}
                                              </h6>
                                              <div
                                                className="discounted__list"
                                                style={{ display: "flex" }}
                                              >
                                                <p className="discounted_price">
                                                  {(
                                                    item.productPrice *
                                                    item?.noOfProducts
                                                  ).toFixed(2)}
                                                </p>
                                                <p className="discount_price px-2">
                                                  {item.productMRP}
                                                </p>
                                                <p className="percent px-4">
                                                  {item.discount}%
                                                </p>
                                              </div>
                                              <div className="save_or_remove_btn">
                                                <Link
                                                  onClick={() =>
                                                    saveForLaterOrMoveToCartHandler(
                                                      item?.cartItemId,
                                                      false
                                                    )
                                                  }
                                                >
                                                  MOVE TO CART
                                                </Link>
                                                <Link
                                                  onClick={() =>
                                                    deleteHandler(
                                                      item?.productId
                                                    )
                                                  }
                                                >
                                                  REMOVE
                                                </Link>
                                              </div>
                                              <div className="increase_decrease_btn mt-3">
                                                <div
                                                  className="value-button"
                                                  id="decrease"
                                                  style={{ cursor: "default" }}
                                                >
                                                  -
                                                </div>
                                                <span className="pt-1 px-2  border">
                                                  {item?.noOfProducts}
                                                </span>
                                                <div
                                                  className="value-button"
                                                  id="increase"
                                                  style={{ cursor: "default" }}
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
                                  ))}
                              </div>
                            </div>
                          )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {(cartData?.Products?.length > 0) && <div className="col-lg-4 col-12 ">
            <div className="container-fluid px-md-5"></div>
            <div className="card">
              <div className="card-body">
                <h6 className="price_details">PRICE DETAILS</h6>
                <hr />
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0">
                    <p className="price_title">
                      <b>
                        Price ({cartData.Products && cartData.Products.length}{" "}
                        item)
                      </b>
                    </p>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="subtotal">${totalSum.toFixed(2)}</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0 ">
                    <p className="price_title">
                      <b>Discount</b>
                    </p>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="price_title_tax">-${cartData.discountPrice}</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-sm-8 col-6 p-0 ">
                    <p className="price_title">
                      <b>Delivery Charges</b>
                    </p>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p id="price_title_tax">${cartData.deliveryCharges}</p>
                  </div>
                </div>
                <hr />
                <div className="row mx-0 mb-2">
                  <div className="col-sm-8 col-6 p-0 d-inline">
                    <p className="total_amount">
                      <b>Total Amount</b>
                    </p>
                  </div>
                  <div className="col-sm-4 col-6 p-0">
                    <p className="total_amount">
                      $
                      {Number(totalAmount).toFixed(
                        2
                      )}
                    </p>
                  </div>
                </div>
                <hr />
                <a href="#" className="total_saving">
                  You total Saving on this order ${cartData.discountPrice}
                </a>
              </div>
            </div>
        {(cartData?.Products?.length > 0) &&  (<div className="d-flex justify-content-center" onClick={makePayment}>
                <button className="place_order_btn my-3 w-100">
                    Pay $ {Number(totalAmount).toFixed(2)}
                </button>
        </div>)}
          </div>}
        </div>

        {/* {(cartData?.Products?.length > 0) && <PaymentPage
          totalAmount={Number(totalAmount).toFixed(2)}
        />} */}
      </div>
    </>
  );
};

export default DeliveryAddress;

import axios from "axios";
const API = axios.create({ baseURL: `${import.meta.env.VITE_DB_URL}/api` });


export const signin = (formData) => API.post("/signin", formData);
export const signup = (formData) => API.post("/signup", formData);

export const contactUs = (formData) => API.post("/contact-page", formData);

// complain API
export const existingComplainCreate = (formData) => API.post('/create-exist-complaint', formData);
export const nonExistingComplainCreate = (formData) => API.post('/create-nonExist-complaint', formData);
export const getComplaint = (id) => API.get(`/all-complaint-portal/${id}`);
export const createRemarks = ({ formData, complaintId }) => API.put(`/update-complaint/${complaintId}`, formData);

// Product 
export const allProductCategory = () => API.get("/all-product-category");
export const getSingleProduct = (id) => API.get(`/products/${id}`);
export const getProduct = (id) => API.get(`/all-product/${id}`);
export const createCart = (formData,token = "") => API.post(`/add-cart?token=${token}`, formData);
export const fetchCart = (token) => API.get(`/carts/get-cart?token=${token}`);
export const getAllSaveForLater = (token) => API.get(`/carts/getAllSaveLater?token=${token}`);
export const deleteCartItem = (cartItemId) => API.delete(`/carts/cartItems/${cartItemId}`);
export const cartUpdateQuantity = ({cartItemId,positiveAndNegativeValue,token}) => API.patch(`/cartItems/update-quantity/${cartItemId}?token=${token}`,{positiveAndNegativeValue});
export const addAndMoveSaveLater = (formData) => API.patch(`/cartItems/addAndMoveSaveLater?token=${formData.token}`,formData);

export const addCartItems =(formData,token)=>API.post(`/add-cart-items?token=${formData.token}`,formData)
export const deleteCartItems =(cartItemId,token)=>API.delete(`/carts/cartItems/${cartItemId}?token=${token}`)


// career and employment 
export const submitCareerForm = (formData) => API.post('/create-career', formData)


// Address
export const addAddress = (formData,token) => API.post(`/address/create-address?token=${token}`, formData);
export const getSingleAddress = (deliveryAddressId = 8) => API.get(`/address/single-address/${deliveryAddressId}?token=${token}`);
export const getAllAddress = (token) => API.get(`/address/all-address?token=${token}`);
export const patchAddress = (formData,token) => API.patch(`/address/update-address/${formData.deliveryAddressId}?token=${token}`,formData);
export const deleteAddress = (deliveryAddressId,token) => API.delete(`/address/delete-address/${deliveryAddressId}?token=${token}`);
export const createCheckout = (cartId,products,token) => API.post(`/checkout/create-checkout/${cartId}?token=${token}`,products);





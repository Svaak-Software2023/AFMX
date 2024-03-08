import axios from "axios";
// const API = axios.create({ baseURL: "http://52.204.131.213/api" });
const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use(
    config => {
      config.headers['x-access-token'] = `${JSON.parse(localStorage.getItem('user'))?.token}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );


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
export const createCart = (formData) => API.post(`/add-cart`, formData);
export const getCart = () => API.get(`/carts/get-cart`);





// career and employment 
export const submitCreerForm = (formData) => API.post('/create-career', formData)

// Address
export const addAddress = (formData) => API.post('/address/create-address', formData);
export const getSingleAddress = (deliveryAddressId = 8) => API.get(`/address/single-address/${deliveryAddressId}`);
export const getAllAddress = () => API.get('/address/all-address');
export const patchAddress = (formData) => API.patch(`/address/update-address/${formData.deliveryAddressId}`,formData);
export const deleteAddress = (deliveryAddressId) => API.delete(`/address/delete-address/${deliveryAddressId}`);






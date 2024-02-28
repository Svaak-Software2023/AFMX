import axios from "axios";
const API = axios.create({ baseURL: "http://afmx-env-1.eba-umbmnrdz.us-east-1.elasticbeanstalk.com/api" });

export const signin = (formData) => API.post("/signin", formData);
export const signup = (formData) => API.post("/signup", formData);

export const contactUs = (formData) => API.post("/contact-page", formData);

// complain API
export const existingComplainCreate = (formData) => API.post('/create-exist-complaint',formData);
export const nonExistingComplainCreate = (formData) => API.post('/create-nonExist-complaint',formData);
export const getComplaint = (id) => API.get(`/all-complaint-portal/${id}`);
export const createRemarks = ({formData,complaintId}) => API.put(`/update-complaint/${complaintId}`,formData);

// Product 
export const allProductCategory = () => API.get("/all-product-category");
export const getProduct = (categoryId) => API.get( `/all-product/${categoryId}`);






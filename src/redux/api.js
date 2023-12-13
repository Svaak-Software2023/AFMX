import axios from "axios";

const API=axios.create({baseURL:" https://4bda-122-161-51-192.ngrok-free.app"});

export const signin=(formData)=>API.post("/api/signin",formData);
export const signup=(formData)=>API.post("/api/signup",formData);

export const contactUs=(formData)=>API.post("/api/contact-page",formData);


// complain API

export const createComplain=(formData)=>API.post("/api/create-complaint",formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

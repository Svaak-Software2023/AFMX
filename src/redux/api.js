import axios from "axios";

const API=axios.create({baseURL:"http://afmx-env-1.eba-umbmnrdz.us-east-1.elasticbeanstalk.com"});

export const signin=(formData)=>API.post("/api/signin",formData);
export const signup=(formData)=>API.post("/api/signup",formData);

export const contactUs=(formData)=>API.post("/api/contact-page",formData);


import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const getProducts = async () => {
  try {
    const response = await instance.get("/products");
    return response.data;
  } catch (error){
    console.log(error);
  }
}

export const getProduct = async () => {
  try {
    const response = await instance.get(`/products/${productId}`);
    return response.data;
  } catch (error){
    console.log(error);
  }
}
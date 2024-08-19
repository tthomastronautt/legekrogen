import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://legekrogen.webmcdm.dk/",
});

export const getReviewsAxios = () =>
    axiosInstance.get("reviews").then((res) => res.data);

export const getQuestionsAxios = () =>
    axiosInstance.get("questions").then((res) => res.data);

export const createSubscriber = (data) =>
    axiosInstance.post("subscribe", data).then((res) => res.data);

export const getProductsAxios = () =>
    axiosInstance.get("products").then((res) => res.data);

export const createOrderAxios = (data) =>
    axiosInstance.post("orders", data).then((res) => res.data);

export const getOrderAxiosById = (id) =>
    axiosInstance.get(`orders/${id}`).then((res) => res.data);

import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://legekrogen.webmcdm.dk/",
});

export const getReviewsAxios = () =>
    axiosInstance.get("reviews").then((res) => res.data);

export const getQuestionsAxios = () =>
    axiosInstance.get("questions").then((res) => res.data)
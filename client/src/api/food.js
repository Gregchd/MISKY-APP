import axios from "./axios";

export const getFoodsRequest = () => axios.get("/foods");

export const getFoodRequest = (id) => axios.get(`/foods/${id}`);

export const createFoodRequest = (food) => axios.post("/foods", food);

export const updateFoodRequest = (id, food) => axios.put(`/foods/${id}`, food);

export const deleteFoodRequest = (id) => axios.delete(`/foods/${id}`);

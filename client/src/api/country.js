import axios from "./axios";

export const getCountriesRequest = () => axios.get("/countries");

/* export const getTaskRequest = (id) => axios.get(`/tasks/${id}`); */

export const createCountriesRequest = (country) =>
    axios.post("/countries", country);

/* export const updateTaskRequest = (id, task) => axios.put(`/tasks/${id}`, task);

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
 */

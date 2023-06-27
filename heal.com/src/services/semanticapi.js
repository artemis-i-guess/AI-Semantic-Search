import axios from "axios";

const api = axios.create({
	// baseURL: "http://localhost:8000/api/v1",
	withCredentials: true,
	baseURL: "https://localhost:5000"
});

export const search = async (query) => api.post("/search" , query)

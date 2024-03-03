import axios from "axios";

const API_URL =
  "https://0f2b-2402-3a80-6cf-4e9b-7946-d1bb-687e-d582.ngrok-free.app"; // Replace with your API URL

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, userData);
    return response.data; // Assuming your server returns a token upon successful login
  } catch (error) {
    throw error.response.data.error; // Handle login errors
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/register`, userData);
    return response.data; // Assuming your server returns user data upon successful registration
  } catch (error) {
    throw error.response.data.error; // Handle registration errors
  }
};


export const fetchAllUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/fetch-users`);
      console.log(response);
      return response.data; // Assuming your server returns user data upon successful registration
    } catch (error) {
      throw error.response.data.error; // Handle registration errors
    }
  };

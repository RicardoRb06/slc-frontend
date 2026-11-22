import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

api.interceptors.response.use(
  (response) => {
    console.log('success:', {
      url: response.config.url,
      status: response.status,
      dados: response.data,
    });

    return response;
  },
  (error) => {
    console.error('error:', {
      url: error.config?.url,
      status: error.response?.status,
      dados: error.response?.data || error.message,
    });

    return Promise.reject(error);
  }
);
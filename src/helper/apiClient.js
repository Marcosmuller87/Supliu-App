import axios from "axios";

const apiClient = () => {
  const { REACT_APP_API_URL } = process.env;

  const accessToken = "marcosmuller87@gmail.com";

  const authAxiosInstance = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return authAxiosInstance;
};

export default apiClient;

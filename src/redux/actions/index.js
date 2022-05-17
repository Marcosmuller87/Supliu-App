import axios from "axios";

const baseUrl = "https://tiao.supliu.com.br/api/";

const loadData = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default loadData;

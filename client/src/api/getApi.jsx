import axios from "axios";

const GetApi = (id, set) => {
  axios
    .get(`http://localhost:8080/order?id=${id}`)
    .then((response) => set(response.data))
    .catch((error) => console.log(error));
};

export default GetApi;

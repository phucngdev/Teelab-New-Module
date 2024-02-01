import axios from "axios";

const GetApiOrder = (id, set) => {
  axios
    .get(`http://localhost:8080/order/${id}`)
    .then((response) => set(response.data))
    .catch((error) => console.log(error));
};

export default GetApiOrder;

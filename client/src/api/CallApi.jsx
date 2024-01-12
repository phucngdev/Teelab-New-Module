import axios from "axios";

const loadData = (page, setData) => {
  axios
    .get(`http://localhost:8080/${page}`)
    .then((response) => setData(response.data))
    .catch((error) => console.log(error));
};

export default loadData;

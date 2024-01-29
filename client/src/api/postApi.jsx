import axios from "axios";

const PostDataToApi = async (api, data) => {
  try {
    const response = await axios.post(`http://localhost:8080/${api}`, data);
  } catch (error) {
    console.error("Error sending data to API:", error);
  }
};

export default PostDataToApi;

import axios from "axios";

const PostDataToApi = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/order", data);
  } catch (error) {
    console.error("Error sending data to API:", error);
  }
};

export default PostDataToApi;

import axios from "axios";

const PatchDataToApi = async (data, id) => {
  try {
    const response = await axios.patch(
      `http://localhost:8080/account/${id}`,
      data
    );
  } catch (error) {
    console.error("Error sending data to API:", error);
  }
};

export default PatchDataToApi;

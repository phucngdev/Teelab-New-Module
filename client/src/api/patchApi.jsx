import axios from "axios";

const PatchDataToApi = async (data, id) => {
  try {
    const response = await axios.patch(
      `http://localhost:8080/account/${id}`,
      data
    );
    console.log("Dữ liệu đã được cập nhật thành công:", response.data);
  } catch (error) {
    console.error("Error sending data to API:", error);
  }
};

export default PatchDataToApi;

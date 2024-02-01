import axios from "axios";

const deleteApiOrder = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/order/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting resource:", error);
  }
};

export default deleteApiOrder;

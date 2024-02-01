import axios from "axios";

const PatchApiOrder = async (data, id) => {
  try {
    const response = await axios.patch(
      `http://localhost:8080/order/${id}`,
      data
    );
  } catch (error) {
    console.error("Error sending data to API:", error);
  }
};

export default PatchApiOrder;

import axios from 'axios';

export const findAllContactsByCriteria = async () => {
  try {
    const {data} = await axios.get("/api/v1/contacts");
    return data;
  } catch (error) {
    throw error;
  }
};

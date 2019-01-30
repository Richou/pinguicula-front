import axios from 'axios';

export const doLogin = async credentials => {
  try {
    const {data} = await axios.post('/api/v1/login', {...credentials});
    return data;
  } catch (error) {
    throw error;
  }
};

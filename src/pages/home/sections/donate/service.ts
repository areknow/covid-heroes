import Axios, { AxiosResponse } from 'axios';

const ENDPOINT = '/.netlify/functions/email';

export const postFormData = async (data: any): Promise<AxiosResponse> => {
  return await Axios.post(ENDPOINT, JSON.stringify(data));
};

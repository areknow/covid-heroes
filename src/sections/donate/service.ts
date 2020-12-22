import Axios, { AxiosResponse } from 'axios';

const ENDPOINT: string = '/.netlify/functions/email';

export const postFormData = async (data: any): Promise<AxiosResponse> => {
  console.log(data);
  return await Axios.post(ENDPOINT, { data });
};

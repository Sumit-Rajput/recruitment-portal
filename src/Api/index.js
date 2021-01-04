import { get } from './api';
import { BASE_URL } from '../constants'; 

export const getCandidatesData = async () => {
  try {
    const data = await get(BASE_URL);
    return data; 
  } catch (error) {
    console.log('Error')
  }
}
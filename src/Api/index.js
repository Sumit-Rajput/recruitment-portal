import { get } from './api';
import { BASE_URL, APPLICATION_STATE } from '../constants'; 

export const getCandidatesData = async () => {
  try {
    const data = await get(BASE_URL);
    return data.map(candidate => ({
      ...candidate,
      state: APPLICATION_STATE.IN_PROGRESS,
    }));
  } catch (error) {
    console.log('Error')
  }
}
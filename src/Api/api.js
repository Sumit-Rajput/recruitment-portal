export const get = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Got error for URL: ', url,  error);
    throw error;
  }
}
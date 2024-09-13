import { unstable_noStore as noStore } from 'next/cache';

const { API_KEY_QUERY, BASE_URL } = process.env;
export const { BASE_IMAGE_URL } = process.env;

export async function getNowPlayingMovies() {
  noStore();
  try {
    const response = await fetch(`${BASE_URL}/now_playing?${API_KEY_QUERY}`);
    const responseJson = await response.json();
    const { results } = responseJson;
    return results;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw new Error('There is something wrong');
  }
}

export async function getTopRatedMovies() {
  noStore();
  try {
    const response = await fetch(`${BASE_URL}/top_rated?${API_KEY_QUERY}`);
    const responseJson = await response.json();
    const { results } = responseJson;
    return results;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw new Error('There is something wrong');
  }
}

export async function getUpcomingMovies() {
  noStore();
  try {
    const response = await fetch(`${BASE_URL}/upcoming?${API_KEY_QUERY}`);
    const responseJson = await response.json();
    const { results } = responseJson;
    return results;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw new Error('There is something wrong');
  }
}

export async function getPopularMovies() {
  noStore();
  try {
    const response = await fetch(`${BASE_URL}/popular?${API_KEY_QUERY}`);
    const responseJson = await response.json();
    const { results } = responseJson;
    return results;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw new Error('There is something wrong');
  }
}

'use server';

import { getTopRatedMovie } from './data';

export async function getTopRatedMovieAction() {
  const data = await getTopRatedMovie();
  return data;
}

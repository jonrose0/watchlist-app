"use server";

import { unstable_noStore as noStore } from "next/cache";

export async function fetchMovies(
  query: string,
  sort: string,
  genre: string,
  provider: string,
  minDate: string,
  maxDate: string,
  page: number,
) {
  noStore();

  const newQuery = query ? `&with_text_query=${query}` : "";
  const newGenre = genre ? `&with_genres=${genre}` : "";
  const newProvider = provider ? `&with_watch_providers=${provider}` : "";
  const newMinDate = minDate
    ? `&primary_release_date.gte=${minDate}-01-01`
    : "";
  const newMaxDate = maxDate
    ? `&primary_release_date.lte=${maxDate}-12-31`
    : "";
  const newSort = sort ? `&sort_by=${sort}` : "";

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.SHOW_API_KEY}${newQuery}${newGenre}${newProvider}&include_adult=false&watch_region=US${newMinDate}${newMaxDate}&language=en-US&page=${page}${newSort}`,
  );

  const data = await res.json();

  return data;
}

export async function fetchTV(
  query: string,
  sort: string,
  genre: string,
  provider: string,
  minDate: string,
  maxDate: string,
  page: number,
) {
  noStore();

  const newQuery = query ? `&with_text_query=${query}` : "";
  const newGenre = genre ? `&with_genres=${genre}` : "";
  const newProvider = provider ? `&with_watch_providers=${provider}` : "";
  const newMinDate = minDate ? `&air_date.gte=${minDate}-01-01` : "";
  const newMaxDate = maxDate ? `&air_date.lte=${maxDate}-12-31` : "";
  const newSort = sort ? `&sort_by=${sort}` : "";

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.SHOW_API_KEY}${newQuery}${newGenre}${newProvider}&include_adult=false&watch_region=US${newMinDate}${newMaxDate}&language=en-US&page=${page}${newSort}`,
  );

  const data = await res.json();

  return data;
}

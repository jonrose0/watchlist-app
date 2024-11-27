"use server";

export async function fetchMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.SHOW_API_KEY}&append_to_response=credits,recommendations,release_dates,watch/providers`,
  );

  const data = await res.json();

  return data;
}

export async function fetchShow(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.SHOW_API_KEY}&append_to_response=aggregate_credits,content_ratings,recommendations,watch/providers`,
  );

  const data = await res.json();

  return data;
}

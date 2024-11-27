"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchMovies } from "../lib/actions";
import Grid from "./media-grid";

type dataProps = {
  id: number;
  title: string;
  poster_path: string;
};

let page = 2;

export default function LoadMore({
  query,
  sort,
  genre,
  provider,
  minDate,
  maxDate,
}: {
  query: string;
  sort: string;
  genre: string;
  provider: string;
  minDate: string;
  maxDate: string;
}) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<dataProps[]>([]);
  const [post, setPost] = useState<
    {
      id: string;
      title: string;
      mediaID: number;
      type: string;
      poster_path: string;
      status: string;
    }[]
  >([]);

  useEffect(() => {
    if (inView) {
      fetchMovies(query, sort, genre, provider, minDate, maxDate, page).then(
        (res) => {
          setData([...data, ...res.results]);
          page++;
        },
      );

      fetchBookmarks();
    }
  }, [inView]);

  useEffect(() => {
    page = 2;
    setData([]);
  }, [query, sort, genre, provider, minDate, maxDate]);

  async function fetchBookmarks() {
    setPost(post);
  }

  return (
    <>
      <Grid data={data} type="movies" />
      <div ref={ref}></div>
    </>
  );
}

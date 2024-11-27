"use client";

import Link from "next/link";
import BookMark from "./bookmark";
import { useEffect, useState } from "react";

function getStorage() {
  const storage = localStorage.getItem("watchlist");

  return storage ? JSON.parse(storage) : [];
}

export default function Grid({ data, type }: { data: any; type: string }) {
  const [watchlist, setWatchlist] = useState<
    {
      id: number;
      title: string;
      poster_path: string;
      type: string;
      status: string;
    }[]
  >([]);

  useEffect(() => {
    setWatchlist(getStorage);
  }, []);

  return (
    <>
      {data.map((item: any) => {
        return (
          <div
            key={item.id}
            className="relative grid grid-rows-[4fr_1fr] overflow-hidden rounded transition-transform hover:scale-105"
          >
            <Link href={`/${type}/${item.id}`}>
              <img
                className="h-full w-full object-cover"
                src={`http://image.tmdb.org/t/p/w780${item.poster_path}`}
                alt=""
              />
            </Link>
            <BookMark
              marked={watchlist.some((mark) => {
                return mark.id === item.id;
              })}
              id={item.id}
              title={type === "movies" ? item.title : item.name}
              poster_path={`http://image.tmdb.org/t/p/w780${item.poster_path}`}
              type={type}
              watchlist={watchlist}
              setWatchlist={setWatchlist}
            />
            <div className="relative flex items-center justify-between gap-4 p-4">
              <Link
                href={`/${type}/${item.id}`}
                className="absolute left-0 top-0 h-full w-full bg-stone-900"
              ></Link>
              <Link className="z-10" href={`/${type}/${item.id}`}>
                <h2>{type === "movies" ? item.title : item.name}</h2>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

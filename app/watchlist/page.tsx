"use client";

import Link from "next/link";
import BookMark from "../ui/bookmark";
import { useEffect, useState } from "react";
import Select from "../ui/select";
import Image from "next/image";
import { watchlistProps } from "../lib/types";

function getStorage() {
  const storage = localStorage.getItem("watchlist");

  return storage ? JSON.parse(storage) : [];
}

export default function Page() {
  const [watchlist, setWatchlist] = useState<watchlistProps[]>([]);

  useEffect(() => {
    setWatchlist(getStorage());
  }, []);

  return (
    <>
      <div className="grid auto-rows-fr grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-8 px-4 py-4 sm:px-8">
        {watchlist.map((p) => {
          return (
            <div
              key={p.id}
              className="grid grid-rows-[4fr_1fr] overflow-hidden rounded transition-transform hover:scale-105"
            >
              <div className="relative">
                <Link href={`/${p.type}/${p.id}`}>
                  <Image
                    className="h-full w-full object-cover"
                    src={p.poster_path}
                    alt=""
                    width={300}
                    height={400}
                  />
                </Link>

                <BookMark
                  marked={watchlist.some((mark) => {
                    return mark.id === p.id;
                  })}
                  id={p.id}
                  title={p.title}
                  poster_path={p.poster_path}
                  type={p.type}
                  watchlist={watchlist}
                  setWatchlist={setWatchlist}
                />
                <p className="absolute bottom-2 right-2 z-10 rounded bg-[hsla(0deg,0%,0%,.75)] px-2 py-1">
                  {p.type === "movies"
                    ? "Movie"
                    : p.type === "shows"
                      ? "TV"
                      : "Game"}
                </p>
              </div>
              <div className="relative flex items-center justify-between gap-4 p-2">
                <Link
                  href={`/${p.type}/${p.id}`}
                  className="absolute left-0 top-0 h-full w-full bg-stone-900"
                ></Link>

                <Link className="relative z-10" href={`/${p.type}/${p.id}`}>
                  <h2>{p.title}</h2>
                </Link>

                <Select
                  id={p.id}
                  status={p.status}
                  watchlist={watchlist}
                  setWatchlist={setWatchlist}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

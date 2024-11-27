"use client";

import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

type Props = {
  marked: boolean;
  id: number;
  title: string;
  poster_path: string;
  type: string;
  watchlist: {
    id: number;
    title: string;
    poster_path: string;
    type: string;
    status: string;
  }[];
  setWatchlist: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        poster_path: string;
        type: string;
        status: string;
      }[]
    >
  >;
};

export default function BookMark({
  marked,
  id,
  title,
  poster_path,
  type,
  watchlist,
  setWatchlist,
}: Props) {
  const [isBookMarked, setIsBookMarked] = useState(marked);

  useEffect(() => {
    setIsBookMarked(marked);
  }, [marked]);

  function handleClick() {
    if (!isBookMarked) {
      const media = {
        id,
        title,
        type,
        poster_path,
        status: "to watch",
      };

      const newWatchlist = [...watchlist, media];

      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));

      setWatchlist(newWatchlist);
      setIsBookMarked(true);
    }

    if (isBookMarked) {
      const newWatchlist = watchlist.filter((item) => {
        return item.id !== id;
      });

      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));

      setWatchlist(newWatchlist);
      setIsBookMarked(false);
    }
  }

  return (
    <button
      className="absolute right-2 top-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[hsla(0deg,0%,0%,.5)] p-2"
      onClick={handleClick}
    >
      <div className="text-2xl">
        {isBookMarked ? <FaStar /> : <FaRegStar />}
      </div>
    </button>
  );
}

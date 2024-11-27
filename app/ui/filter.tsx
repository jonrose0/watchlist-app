"use client";

import { useState } from "react";
import Search from "./search";
import Sort from "./sort";
import FilterDate from "./filterDate";
import FilterGenre from "./filterGenre";
import FilterProvider from "./filterProvider";

type Props = {
  type: string;
  genres: { id: number; name: string }[];
  providers: {
    provider_id?: number;
    provider_name?: string;
    logo_path?: string;
    id?: number;
    name?: string;
  }[];
  sort: { id: number; name: string; value: string }[];
};

export default function Filter({ type, genres, providers, sort }: Props) {
  const [openFilter, setOpenFilter] = useState({
    release: false,
    genre: false,
    provider: false,
  });

  function handleFilterOpen(filter: string) {
    if (filter === "release") {
      setOpenFilter({
        release: !openFilter.release,
        genre: false,
        provider: false,
      });
    }

    if (filter === "genre") {
      setOpenFilter({
        release: false,
        genre: !openFilter.genre,
        provider: false,
      });
    }

    if (filter === "provider") {
      setOpenFilter({
        release: false,
        genre: false,
        provider: !openFilter.provider,
      });
    }
  }

  return (
    <div className="pb-4 pt-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Search type={type} />
        <Sort sort={sort} />
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="md:relative">
            <button
              className="w-full bg-stone-900 p-2"
              onClick={() => handleFilterOpen("release")}
            >
              Release Date
            </button>
            <FilterDate open={openFilter.release} />
          </div>
          <div className="md:relative">
            <button
              className="w-full bg-stone-900 p-2"
              onClick={() => handleFilterOpen("genre")}
            >
              Genres
            </button>
            <FilterGenre genres={genres} open={openFilter.genre} />
          </div>
          <div className="md:relative">
            <button
              className="w-full bg-stone-900 p-2"
              onClick={() => handleFilterOpen("provider")}
            >
              Providers
            </button>
            <FilterProvider providers={providers} open={openFilter.provider} />
          </div>
        </div>
      </div>
    </div>
  );
}

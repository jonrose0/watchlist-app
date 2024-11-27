"use client";

export default function Select({
  id,
  status,
  watchlist,
  setWatchlist,
}: {
  id: number;
  status: string;
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
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newWatchlist = watchlist.map((item) => {
      return item.id === id ? { ...item, status: e.target.value } : item;
    });

    localStorage.setItem("watchlist", JSON.stringify(newWatchlist));

    setWatchlist(newWatchlist);
  }

  return (
    <select
      defaultValue={status}
      className="relative z-20 bg-stone-700 py-2"
      onChange={handleChange}
    >
      <option value="to watch">to watch</option>
      <option value="watching">watching</option>
      <option value="watched">watched</option>
    </select>
  );
}

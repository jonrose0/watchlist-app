import { fetchTV } from "../lib/actions";
import LoadMore from "./load-more-tv";
import Grid from "./media-grid";

export default async function Shows({
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
  const data = await fetchTV(query, sort, genre, provider, minDate, maxDate, 1);

  return (
    <>
      <p>Total: {data.total_results}</p>
      <div className="grid auto-rows-fr grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-8 py-4">
        <Grid data={data.results} type="shows" />
        <LoadMore
          query={query}
          sort={sort}
          genre={genre}
          provider={provider}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
      <div className="mb-8 flex justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-8 border-zinc-800 border-t-slate-400"></div>
      </div>
    </>
  );
}

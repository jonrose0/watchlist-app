import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterGenre({
  genres,
  open,
}: {
  genres: { id: number; name: string }[];
  open: boolean;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleFilter(selection: number | undefined, filter: string) {
    const params = new URLSearchParams(searchParams);

    if (selection) {
      let genres = params.get(filter)?.split(",");

      if (genres) {
        if (genres.indexOf(selection.toString()) !== -1) {
          genres = genres.filter((genre) => {
            return genre !== selection.toString();
          });
        } else {
          genres.push(selection.toString());
        }
        if (genres.length > 0) {
          params.set(filter, genres.join(","));
        } else {
          params.delete(filter);
        }
      } else {
        params.set(filter, selection.toString());
      }
    } else {
      params.delete(filter);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div
        className={clsx(
          "z-50 bg-stone-900 p-4 md:absolute md:left-1/2 md:top-full md:w-72 md:max-w-80 md:translate-x-[-50%]",
          {
            hidden: open === false,
            block: open === true,
          },
        )}
      >
        <div className="mb-8 flex justify-between">
          <h3>Genres</h3>
          <button onClick={(e) => handleFilter(undefined, "genre")}>
            clear filters
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {genres.map((genre) => {
            return (
              <button
                key={genre.id}
                className=""
                onClick={(e) => handleFilter(genre.id, "genre")}
              >
                {genre.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

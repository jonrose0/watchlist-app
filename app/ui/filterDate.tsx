import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterDate({ open }: { open: boolean }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleMinDate = useDebouncedCallback((date: string | undefined) => {
    const params = new URLSearchParams(searchParams);

    if (date !== undefined) {
      if (Number(date) < 1900) {
        params.set("min-date", "1900");
      } else {
        params.set("min-date", date);
      }
    } else {
      params.delete("min-date");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  const handleMaxDate = useDebouncedCallback((date: string | undefined) => {
    const params = new URLSearchParams(searchParams);

    if (date) {
      if (Number(date) > new Date().getFullYear()) {
        const newDate = new Date().getFullYear();

        params.set("max-date", newDate.toString());
      } else {
        params.set("max-date", date);
      }
    } else {
      params.delete("max-date");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <>
      <div
        className={clsx(
          "z-50 bg-stone-900 p-4 md:absolute md:left-1/2 md:top-full md:w-72 md:translate-x-[-50%]",
          {
            hidden: open === false,
            block: open === true,
          },
        )}
      >
        <div className="mb-8 flex justify-between">
          <h3>Release Date</h3>
        </div>
        <div className="flex gap-4">
          <input
            className="w-2/4 bg-stone-700 p-2"
            type="number"
            min="1900"
            placeholder="min"
            onChange={(e) => handleMinDate(e.target.value)}
          />
          <input
            className="w-2/4 bg-stone-700 p-2"
            type="number"
            max={new Date().getFullYear()}
            placeholder="max"
            onChange={(e) => handleMaxDate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sort({
  sort,
}: {
  sort: { id: number; name: string; value: string }[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSort(selection: string) {
    const params = new URLSearchParams(searchParams);

    if (selection) {
      params.set("sort", selection);
    } else {
      params.delete("sort");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className="md:order-3">
        <select
          className="w-full cursor-pointer bg-stone-900 p-[.657rem]"
          defaultValue={searchParams.get("sort")?.toString()}
          onChange={(e) => handleSort(e.target.value)}
        >
          {sort.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

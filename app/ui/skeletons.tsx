export function MediaCard() {
  return (
    <>
      <div className="grid h-96 w-full grid-rows-[4fr_1fr]">
        <div className="w-full bg-[#111]"></div>
        <div className="flex w-full items-center bg-[#222] p-4">
          <div className="h-6 w-1/2 rounded-full bg-[#333]"></div>
        </div>
      </div>
    </>
  );
}

export function MediaGridSkeleton() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-8 py-4">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </>
  );
}

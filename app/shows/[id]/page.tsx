import { fetchShow } from "@/app/lib/data";
import { ShowData } from "@/app/lib/types";
import Provider from "@/app/ui/provider";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data: ShowData = await fetchShow(id);

  return (
    <div className="mx-auto grid max-w-7xl gap-y-3 px-4 py-20 sm:grid-cols-2 sm:grid-rows-[repeat(4,_auto)_1fr] sm:gap-x-12 sm:p-4 sm:px-8 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_1fr]">
      <div className="mx-auto max-w-96 sm:row-span-4 sm:mx-0 sm:max-w-none">
        <img
          className="w-full"
          src={`http://image.tmdb.org/t/p/w342${data.poster_path}`}
          alt=""
        />
      </div>
      <h1 className="text-center text-4xl font-bold sm:col-start-2 lg:text-left">
        {data.name}
      </h1>
      <div className="border-b-[1px] border-[#ededed33] px-8 py-4 sm:col-start-2 lg:border-b-0 lg:p-0">
        <p>
          <span className="lg:hidden">genres: </span>
          {data.genres.map((item, i) => {
            return i + 1 === data.genres.length ? item.name : `${item.name}, `;
          })}
        </p>
      </div>
      <div className="sm:col-start-2 lg:col-start-3 lg:row-span-3 lg:row-start-1">
        {/* <div className='border-b-[1px] border-[#ededed33] py-4 px-8'>
					<p>
						<span>Rated:</span>{' '}
						{
							data.content_ratings.results.findLast(
								(el: any) => el.iso_3166_1 === 'US'
							).rating
						}
					</p>
				</div> */}
        <div className="border-b-[1px] border-[#ededed33] px-8 py-4">
          <p>
            <span>Air Date:</span>{" "}
            {new Date(data.first_air_date.toString()).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}{" "}
            -{" "}
            {new Date(data.last_air_date.toString()).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </p>
        </div>
        <div className="border-b-[1px] border-[#ededed33] px-8 py-4">
          <p>
            <span>Runtime:</span>{" "}
            {data.episode_run_time.length > 0
              ? `${data.episode_run_time}m`
              : ""}
          </p>
          <p></p>
        </div>
        <div className="border-b-[1px] border-[#ededed33] px-8 py-4">
          <p>
            <span>number of episodes:</span> {data.number_of_episodes}
          </p>
        </div>
        <div className="border-b-[1px] border-[#ededed33] px-8 py-4">
          <p>
            <span>number of seasons:</span> {data.number_of_seasons}
          </p>
        </div>
        {/* <div className='border-b-[1px] border-[#ededed33] py-4 px-8'>
					<Producers pro={data.production_companies} />
				</div> */}
        <div className="border-b-[1px] border-[#ededed33] px-8 py-4">
          <p>
            <span>status:</span> {data.status}
          </p>
        </div>
      </div>
      {data["watch/providers"].results.US?.buy ||
      data["watch/providers"].results.US?.flatrate ||
      data["watch/providers"].results.US?.free ? (
        <div className="sm:col-start-2 sm:row-span-2 sm:row-start-4 lg:col-start-3 lg:row-start-4">
          <h2 className="text-center text-2xl font-bold">where to watch</h2>
          {data["watch/providers"].results.US?.buy && (
            <Provider
              type={"buy"}
              provider={data["watch/providers"].results.US?.buy}
            />
          )}
          {data["watch/providers"].results.US?.flatrate && (
            <Provider
              type={"flatrate"}
              provider={data["watch/providers"].results.US?.flatrate}
            />
          )}
          {data["watch/providers"].results.US?.free && (
            <Provider
              type={"free"}
              provider={data["watch/providers"].results.US?.free}
            />
          )}
          <div className="rounded-lg bg-[#ededed33] p-1">
            <p className="px-2 text-center">
              Streaming data provided by{" "}
              <a
                className="text-[#1dabb3]"
                target="_blank"
                href="https://justwatch.com/"
              >
                JustWatch
              </a>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="sm:row-start-5 lg:col-start-2 lg:row-span-2 lg:row-start-3 lg:mt-0">
        <h2 className="text-center text-2xl font-bold lg:hidden">overview</h2>
        <p className="leading-7">{data.overview}</p>
      </div>
    </div>
  );
}

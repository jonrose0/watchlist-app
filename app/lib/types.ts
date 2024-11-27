export type watchlistProps = {
  id: number;
  title: string | undefined;
  poster_path: string;
  type: string;
  status: string;
};

export type MovieData = {
  title: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  runtime: number;
  genres: Genre[];
  release_dates: ReleaseDates;
  production_companies: ProductionCompany[];
  status: string;
  "watch/providers": WatchProviders;
};

export type DataProps = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
};

export type ShowData = {
  name: string;
  poster_path: string;
  overview: string;
  first_air_date: Date;
  last_air_date: Date;
  episode_run_time: number[];
  number_of_episodes: number;
  number_of_seasons: number;
  status: string;
  genres: Genre[];
  content_ratings: ContentRatings;
  production_companies: Network[];
  "watch/providers": ShowWatchProviders;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

type ReleaseDates = {
  results: ReleaseDatesResult[];
};

type ReleaseDatesResult = {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
};

type ReleaseDate = {
  certification: string;
  iso_639_1: string;
  note: string;
  release_date: Date;
  type: number;
};

type WatchProviders = {
  results: Results;
};

type Results = {
  US: AE;
};

type AE = {
  link: string;
  buy: Flatrate[];
  flatrate?: Flatrate[];
  rent: Flatrate[];
};

type Flatrate = {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
};

type ContentRatings = {
  results: ContentRatingsResult[];
};

type ContentRatingsResult = {
  iso_3166_1: string;
  rating: string;
};

type Network = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: OriginCountry;
};

enum OriginCountry {
  CA = "CA",
  GB = "GB",
  Us = "US",
}

type ShowWatchProviders = {
  results: ShowResults;
};

type ShowResults = {
  US: At;
};

type At = {
  link: string;
  buy: Flatrate[];
  flatrate: Flatrate[];
  free?: Flatrate[];
};

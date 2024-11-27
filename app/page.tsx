import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="md:flex">
        <div className="relative flex h-[90vh] flex-1 items-center justify-center px-4 sm:px-8">
          <div className="absolute inset-0 bg-[url('/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg')] bg-center blur-md before:absolute before:inset-0 before:bg-[rgba(0,0,0,.8)]"></div>
          <div className="relative z-10 flex max-w-md flex-col items-center gap-4 text-center md:items-start md:text-left">
            <p className="flex-1">
              Curate your cinematic journey with a diverse mix of genres,
              directors, and eras. With every movie added, you're building a
              personal anthology of storytelling, ensuring endless entertainment
              at your fingertips.
            </p>
            <Link
              href="/movies"
              className="flex-1 rounded-full bg-[#1dabb3] px-4 py-2"
            >
              Movies
            </Link>
          </div>
        </div>
        <div className="relative flex h-[90vh] flex-1 items-center justify-center px-4 sm:px-8">
          <div className="absolute inset-0 bg-[url('/jens-kreuter-ngMtsE5r9eI-unsplash.jpg')] bg-center blur-md before:absolute before:inset-0 before:bg-[rgba(0,0,0,.8)]"></div>
          <div className="relative z-10 flex max-w-md flex-col items-center gap-4 text-center md:items-start md:text-left">
            <p className="flex-1">
              Build a rich tapestry of binge-worthy content, spanning various
              themes and narratives. Each show added promises new adventures,
              characters, and ongoing sagas, making your watchlist the ultimate
              destination for episodic indulgence.
            </p>
            <Link
              href="/shows"
              className="flex-1 rounded-full bg-[#1dabb3] px-4 py-2"
            >
              TV Shows
            </Link>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center gap-8 p-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2 text-center">
          <p className="italic text-gray-400">
            Left background photo by{" "}
            <a
              className="text-[#1dabb3]"
              target="_blank"
              href="https://unsplash.com/@felixmooneeram?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              Felix Mooneeram
            </a>{" "}
            on{" "}
            <a
              className="text-[#1dabb3]"
              target="_blank"
              href="https://unsplash.com/photos/red-cinema-chair-evlkOfkQ5rE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              Unsplash
            </a>
          </p>
          <p className="italic text-gray-400">
            right background photo by{" "}
            <a
              className="text-[#1dabb3]"
              target="_blank"
              href="https://unsplash.com/@jenskreuter?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              Jens Kreuter
            </a>{" "}
            on{" "}
            <a
              className="text-[#1dabb3]"
              target="_blank"
              href="https://unsplash.com/photos/flat-screen-tv-ngMtsE5r9eI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              Unsplash
            </a>
          </p>
        </div>
        <div className="flex items-start justify-center gap-2">
          <Image
            width={60}
            height={60}
            alt="tmdb logo"
            src={"/tmdb_logo.svg"}
            className="mt-1"
          />
          <p className="max-w-40 italic text-gray-400">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
        </div>
      </footer>
    </div>
  );
}

import Image from 'next/image'
import tmdb from '../../public/tmdb.svg'

export const Footer = () => {
  return (
    <footer className="px-5 md:px-12 lg:px-40 mt-5">
      <div className=" border-t-zinc-500 border-t-[1px]">
        <div className="flex items-center justify-between">
          <p className="text-zinc-300">
            Dữ liệu phim được cung cấp bởi{' '}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              className="font-semibold hover:underline hover:text-zinc-100"
            >
              The Movie Database
            </a>
          </p>
          <Image
            src={tmdb}
            alt="tmdb logo"
            width={300}
            height={300}
            className="w-24 h-24"
          />
        </div>
        <p className="text-xs text-center mb-5">
          Designed and coded by{' '}
          <a
            href="https://www.github.com/daile97"
            target="_blank"
            className="font-semibold hover:underline"
          >
            Dai Le
          </a>
        </p>
      </div>
    </footer>
  )
}

import { PlayIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { FC } from 'react'

interface MoviePosterProps {}

const MoviePoster: FC<MoviePosterProps> = ({}) => {
  return (
    <Link
      className="relative border-gray-200 shadow-sm border rounded-lg transform-gpu transition-transform overflow-hidden aspect-poster group hover:scale-105 focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-950"
      href="#"
    >
      <img
        alt="Poster"
        className="group-hover:opacity-90 pointer-events-none object-cover"
        height="600"
        src="https://image.tmdb.org/t/p/original/g94IcdzPswTYl1ISdgn2EwvaZtt.jpg"
        style={{
          aspectRatio: '400/600',
          objectFit: 'cover',
        }}
        width="400"
      />
      <div className="absolute inset-0 flex justify-center items-center gap-2 opacity-0 p-4 text-center transition-opacity pointer-events-none bg_gray-900/90">
        <PlayIcon className="group-hover:scale-110 dark:bg-gray-950 shadow-lg p-2 rounded-full w-10 h-10 translate-x-0.5 translate-y-0.5 bg_white" />
        <div className="font-medium text-sm dark:text-gray-900/90 text_gray-50/90">
          View Details
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 p-4 text-center pointer-events-none">
        <img
          alt="Poster"
          className="aspect-poster object-cover"
          height="300"
          src="https://image.tmdb.org/t/p/original/g94IcdzPswTYl1ISdgn2EwvaZtt.jpg"
          width="200"
        />
        <div className="font-medium text-xs dark:text-gray-200/80 text_gray-900/80">
          7.2/10 - Spider-Man: No Way Home
        </div>
      </div>
    </Link>
  )
}

export default MoviePoster

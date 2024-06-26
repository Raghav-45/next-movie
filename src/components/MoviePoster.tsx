import { CirclePlayIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

interface MoviePosterProps {
  posterPath: string
  title: string
  releaseDate: string
}

const textDate = async (givenDate: string) => {
  // Split the input date string into year, month, and day parts
  const formattedDate: unknown[] = givenDate.split('-')

  // Extract year, month, and day from the parts
  const year = formattedDate[0] as number
  const month = formattedDate[1] as number
  // const date = formattedDate[2] as number

  // Array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  // Return the formatted date string
  return `${monthNames[month - 1]} ${year}`
}

const MoviePoster: FC<MoviePosterProps> = ({
  posterPath,
  title,
  releaseDate,
}) => {
  return (
    <div className="overflow-hidden group">
      <div className="relative group-hover:border-2 group-hover:border-yellow-500 mb-1 rounded-md w-full overflow-hidden aspect-[2/3]">
        <Image
          className="w-full h-full"
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={posterPath}
          height={150}
          width={150}
        />
        <div className="top-0 left-0 z-10 absolute flex justify-center items-center bg-black/25 opacity-0 group-hover:opacity-100 w-full h-full transition-all">
          <CirclePlayIcon className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-y-0.5">
        <p className="px-1 font-semibold text-sm truncate">{title}</p>
        <span className="px-1 text-xs truncate">{releaseDate}</span>
      </div>
    </div>
  )
}

export default MoviePoster

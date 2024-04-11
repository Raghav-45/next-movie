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
    <div className="overflow-hidden">
      <div className="relative mb-1 rounded-md w-full overflow-hidden aspect-[2/3]">
        <Image
          className="w-full h-full"
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={posterPath}
          height={150}
          width={150}
        />
      </div>
      <div className="flex flex-col gap-y-0.5">
        <p className="px-1 font-semibold text-sm truncate">
          {title}
        </p>
        <span className="px-1 text-xs truncate">{textDate(releaseDate)}</span>
      </div>
    </div>
  )
}

export default MoviePoster

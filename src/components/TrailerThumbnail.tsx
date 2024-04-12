import { CirclePlayIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

interface TrailerThumbnailProps {
  thumbnailPath: string
  title: string
  releaseDate: string
}

const textDate = async (givenDate: string) => {
  // Split the input date string into year, month, and day parts
  const formattedDate: unknown[] = givenDate.split('-')

  // Extract year, month, and day from the parts
  const year = formattedDate[0] as number
  const month = formattedDate[1] as number
  const date = formattedDate[2] as number

  function removeZero(date: number) {
    if (date < 10) {
      return (date as unknown as string).at(1)
    }
    return date
  }

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
  return `${removeZero(date)} ${monthNames[month - 1]}, ${year}`
}

function cleanNameTesting(name: string): string {
  const forbiddenWords: string[] = [
    '1080p',
    '10bit',
    'BluRay',
    '60FPS',
    'x265',
    'HEVC',
    'ESub',
    'Hindi',
    'english',
    'DD 5.1',
    // 'DD 5.1',
  ]

  // Remove forbidden words from the name
  forbiddenWords.forEach((word) => {
    name = name.replace(new RegExp(word, 'gi'), '')
  })

  // Remove extra whitespaces
  name = name.replace(/\s+/g, ' ').trim()

  return name
}

const TrailerThumbnail: FC<TrailerThumbnailProps> = ({
  thumbnailPath,
  title,
  releaseDate,
}) => {
  return (
    <div className="overflow-hidden group">
      <div className="relative group-hover:border-2 group-hover:border-yellow-500 mb-1 rounded-md w-full overflow-hidden aspect-video">
        <Image
          className="w-full h-full"
          src={`https://image.tmdb.org/t/p/original${thumbnailPath}`}
          alt={thumbnailPath}
          height={150}
          width={150}
        />
        <div className="top-0 left-0 z-10 absolute flex justify-center items-center bg-black/25 opacity-0 group-hover:opacity-100 w-full h-full transition-all">
          <CirclePlayIcon className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-y-0.5">
        <p className="px-1 font-semibold text-sm truncate">{title}</p>
        <span className="px-1 text-xs truncate">{textDate(releaseDate)}</span>
      </div>
    </div>
  )
}

export default TrailerThumbnail

import MoviePoster from '@/components/MoviePoster'
import VirtualHubSection from '@/components/VirtualHubSection'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { homeData } from '@/lib/testData'

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

export default function Home() {
  return (
    <>
      <VirtualHubSection>
        <CarouselContent className="-ml-3">
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem key={index} className="pl-3 basis-[15%]">
              <div className="bg-blue-400 rounded-md w-full overflow-hidden aspect-[2/3]">
                <img
                  className="w-full h-full"
                  src="https://image.tmdb.org/t/p/original/g94IcdzPswTYl1ISdgn2EwvaZtt.jpg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </VirtualHubSection>

      <VirtualHubSection>
        <CarouselContent className="-ml-3">
          {homeData.results.map((elem, index) => (
            <CarouselItem key={index} className="pl-3 basis-[15%]">
              <div className="overflow-hidden">
                <img
                  className="rounded-md w-full h-full overflow-hidden aspect-[2/3]"
                  src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
                />
                <p className="px-1 text-sm truncate">{elem.title}</p>
                <span className="px-1 text-xs truncate">
                  {textDate(elem.release_date)}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </VirtualHubSection>

      <section className="gap-6 grid px-4 md:px-6 py-6 w-full">
        <div className="space-y-4">
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight">
            Action & Adventure
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
            High-octane thrills and edge-of-your-seat excitement. Buckle up for
            the best action movies.
          </p>
        </div>
        <div className="gap-3 grid md:grid-cols-2 xl:grid-cols-7">
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
        </div>
      </section>
    </>
  )
}

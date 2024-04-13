import MoviePoster from '@/components/MoviePoster'
import VirtualHubSection from '@/components/VirtualHubSection'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, CirclePlayIcon } from 'lucide-react'
import TrailerThumbnail from '@/components/TrailerThumbnail'
import HeroSectionCarousel from '@/components/HeroSectionCarousel'

interface TVSeries {
  backdrop_path: string
  id: number
  original_name: string
  overview: string
  poster_path: string
  media_type: 'tv'
  adult: boolean
  name: string
  original_language: string
  genre_ids: number[]
  popularity: number
  first_air_date: string
  vote_average: number
  vote_count: number
  origin_country: string[]
}

interface Movie {
  backdrop_path: string
  id: number
  original_title: string
  overview: string
  poster_path: string
  media_type: 'movie'
  adult: boolean
  title: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface MovieListResponse {
  page: number
  results: (TVSeries | Movie)[]
  total_pages: number
  total_results: number
}
interface TMDBResponseMovieOnly {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
interface TMDBResponseTVSeriesOnly {
  page: number
  results: TVSeries[]
  total_pages: number
  total_results: number
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

async function getTrending() {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/trending`)

  if (!res.ok) {
    throw new Error('Failed to fetch trending')
  }

  return res.json()
}

async function getPopularMovies() {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/movie/popular`)

  if (!res.ok) {
    throw new Error('Failed to fetch popular movies')
  }

  return res.json()
}

async function getUpcomingMovies() {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/movie/upcoming`)

  if (!res.ok) {
    throw new Error('Failed to fetch popular movies')
  }

  return res.json()
}

export default async function Home() {
  // const weeklyTrending: MovieListResponse = await getTrending()
  // const popularMovies: TMDBResponseMovieOnly = await getPopularMovies()
  // const upcomingMovies: TMDBResponseMovieOnly = await getUpcomingMovies()

  return (
    <>
      {/* <div className="flex justify-center mt-12 px-4 rounded-lg w-full overflow-hidden">
        <HeroSectionCarousel>
          <CarouselContent className="-ml-4">
            {weeklyTrending.results.map(
              (elem, index) =>
                index !== 0 && (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <img
                      className="rounded-lg aspect-[5/2] object-cover"
                      src={`https://image.tmdb.org/t/p/original${elem.backdrop_path}`}
                      alt="Hero Section Poster"
                    />
                  </CarouselItem>
                )
            )}
          </CarouselContent>
        </HeroSectionCarousel>
      </div>

      <VirtualHubSection title="Upcoming Movies" description="Coming Soon">
        <CarouselContent className="-ml-3">
          {upcomingMovies.results.map((elem, index) => (
            <CarouselItem key={index} className="pl-3 basis-[15%]">
              <MoviePoster
                title={elem.title}
                posterPath={elem.poster_path}
                releaseDate={elem.release_date}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </VirtualHubSection>

      <VirtualHubSection
        title="Weekly Trending"
        description="Movies & Shows (on cloud)"
      >
        <CarouselContent className="-ml-3">
          {weeklyTrending.results.map(
            (elem, index) =>
              elem.poster_path && (
                <CarouselItem
                  key={elem.poster_path}
                  className="pl-3 basis-[15%]"
                >
                  {elem.media_type == 'tv' ? (
                    <MoviePoster
                      title={elem.name}
                      posterPath={elem.poster_path}
                      releaseDate={elem.first_air_date}
                    />
                  ) : (
                    <MoviePoster
                      title={elem.title}
                      posterPath={elem.poster_path}
                      releaseDate={elem.release_date}
                    />
                  )}
                </CarouselItem>
              )
          )}
        </CarouselContent>
      </VirtualHubSection> */}

      {/* <section className="px-4 md:px-6 py-6 w-full">
        <Carousel
          opts={{
            align: 'start',
            skipSnaps: true,
            slidesToScroll: 'auto',
          }}
          className="px-8 w-full"
        >
          <div className="flex justify-between items-center mb-2 px-0 min-h-5">
            <div className="flex flex-col flex-nowrap flex-initial justify-stretch items-stretch">
              <h2 className="font-bold text-2xl tracking-tight">
                Trending Trailers
              </h2>
              <span className="inline-block text-ellipsis text-gray-500 text-sm whitespace-nowrap">
                Discover
              </span>
            </div>
            <div className="flex justify-between items-center ml-auto w-20 h-auto">
              <CarouselPreviousCustom
                size="icon"
                className="relative bg-gray-300 hover:bg-gray-200 dark:bg-black opacity-70 rounded-full text-gray-500 dark:text-white"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </CarouselPreviousCustom>
              <CarouselNextCustom
                size="icon"
                className="bg-gray-300 hover:bg-gray-200 dark:bg-black opacity-100 rounded-full text-gray-500 dark:text-white"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </CarouselNextCustom>
            </div>
          </div>
          <CarouselContent className="-ml-3">
            {homeData.results.map((elem, index) => (
              <CarouselItem key={index} className="pl-3 basis-[25%]">
                <TrailerThumbnail
                  title={elem.original_title}
                  thumbnailPath={elem.backdrop_path}
                  releaseDate={elem.release_date}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section> */}

      {/* <VirtualHubSection title={'Spiderman'}>
        <CarouselContent className="-ml-3">
          {spiderman.results.map(
            (elem, index) =>
              elem.poster_path && (
                <CarouselItem key={index} className="pl-3 basis-[15%]">
                  <MoviePoster
                    title={elem.original_title}
                    posterPath={elem.poster_path}
                    releaseDate={elem.release_date}
                  />
                </CarouselItem>
              )
          )}
        </CarouselContent>
      </VirtualHubSection> */}
    </>
  )
}

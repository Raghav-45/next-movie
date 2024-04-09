// import MoviePoster from "@/components/MoviePoster";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main>
//       <MoviePoster />
//     </main>
//   );
// }

import MoviePoster from '@/components/MoviePoster'
import Image from 'next/image'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import VirtualHubSection from '@/components/VirtualHubSection'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      <div className="bg-gray-50/90 border-t">
        <div className="gap-6 lg:gap-10 grid md:grid-cols-2 px-4 md:px-6 py-6 container">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold text-3xl sm:text-5xl xl:text-6xl/none tracking-tighter">
                Movie Night, All the Hits
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Watch the latest blockbusters, timeless classics, and everything
                in between.
              </p>
            </div>
            <form className="flex md:flex-row flex-col gap-2 md:gap-4 lg:gap-2">
              <Input
                className="flex-1 dark:bg-gray-950 max-w-[400px]"
                placeholder="Search for movies..."
                type="search"
              />
              <Button className="w-full md:w-auto" type="submit">
                Search
              </Button>
            </form>
          </div>
          <div className="gap-4 md:gap-2 grid">
            <Link className="rounded-lg overflow-hidden aspect-poster" href="#">
              <img
                alt="Poster"
                className="object-cover"
                height="600"
                src="https://image.tmdb.org/t/p/original/g94IcdzPswTYl1ISdgn2EwvaZtt.jpg"
                style={{
                  aspectRatio: '400/600',
                  objectFit: 'cover',
                }}
                width="400"
              />
            </Link>
            <Link className="rounded-lg overflow-hidden aspect-poster" href="#">
              <img
                alt="Poster"
                className="aspect-poster object-cover"
                height="600"
                src="https://image.tmdb.org/t/p/original/g94IcdzPswTYl1ISdgn2EwvaZtt.jpg"
                width="400"
              />
            </Link>
          </div>
        </div>
      </div>

      <VirtualHubSection>
        <div className="gap-3 grid md:grid-cols-2 xl:grid-cols-7">
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
        </div>
      </VirtualHubSection>

      <VirtualHubSection>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            // containScroll: true,
            skipSnaps: true,
            slidesToScroll: 'auto',
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem key={index} className="w-full basis-1/6">
                <MoviePoster />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden' />
          <CarouselNext className='hidden' />
        </Carousel>
      </VirtualHubSection>

      <section className="gap-6 grid px-4 md:px-6 py-6 w-full container">
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

import { FC } from 'react'
import { Button } from './ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from './ui/carousel'

interface VirtualHubSectionProps {
  children: React.ReactNode
}

const VirtualHubSection: FC<VirtualHubSectionProps> = ({ children }) => {
  // return (
  //   <section className="grid px-4 md:px-6 py-6 w-full container">
  //     <div className="flex justify-between items-center mb-2 px-8 min-h-5">
  //       <div className="flex flex-col flex-nowrap flex-initial justify-stretch items-stretch">
  //         <h2 className="font-bold text-2xl tracking-tight">Hollywood Gems</h2>
  //         <span className="inline-block text-ellipsis text-gray-500 text-sm whitespace-nowrap">
  //           Movies & Shows (on cloud)
  //         </span>
  //       </div>
  //       <div className="flex justify-between items-center ml-auto w-20 h-auto">
  //         <Button
  //           size="icon"
  //           className="bg-gray-300 hover:bg-gray-200 dark:bg-black opacity-70 rounded-full text-gray-500 dark:text-white"
  //         >
  //           <ChevronLeftIcon className="w-4 h-4" />
  //         </Button>
  //         <Button
  //           size="icon"
  //           className="bg-gray-300 hover:bg-gray-200 dark:bg-black opacity-100 rounded-full text-gray-500 dark:text-white"
  //         >
  //           <ChevronRightIcon className="w-4 h-4" />
  //         </Button>
  //       </div>
  //     </div>
  //     {children}
  //   </section>
  // )

  return (
    // <Carousel
    //       opts={{
    //         align: 'start',
    //         loop: true,
    //         // containScroll: true,
    //         skipSnaps: true,
    //         slidesToScroll: 'auto',
    //       }}
    //       className="w-full"
    //     >
    //   <CarouselContent>
    //     {Array.from({ length: 15 }).map((_, index) => (
    //       <CarouselItem key={index} className="w-full basis-1/6">
    //         <MoviePoster />
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious className='hidden' />
    //   <CarouselNext className='hidden' />
    // </Carousel>

    <section className="grid px-4 md:px-6 py-6 w-full container">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          // containScroll: true,
          skipSnaps: true,
          slidesToScroll: 'auto',
        }}
        className="px-8 w-full"
      >
        <div className="flex justify-between items-center mb-2 px-0 min-h-5">
          <div className="flex flex-col flex-nowrap flex-initial justify-stretch items-stretch">
            <h2 className="font-bold text-2xl tracking-tight">
              Hollywood Gems
            </h2>
            <span className="inline-block text-ellipsis text-gray-500 text-sm whitespace-nowrap">
              Movies & Shows (on cloud)
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
        {children}
      </Carousel>
    </section>
  )
}

export default VirtualHubSection

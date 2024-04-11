// 'use client'

import TrailerThumbnail from '@/components/TrailerThumbnail'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from '@/components/ui/carousel'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CirclePlayIcon,
  SkipBackIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const googleDriveIndexURL = 'https://gdrive.adi4545aditya.workers.dev'
const driveNumber = '/0:'
const drivePath = '/'

export default async function Page({ params }: { params: { slug: string } }) {
  const apiToHit = `${googleDriveIndexURL}${driveNumber}${drivePath}${
    params.slug ? `${params.slug}/` : ''
  }`

  const staticData = await fetch(`${apiToHit}`, {
    cache: 'force-cache',
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: '',
      type: 'folder',
      password: '',
      page_token: '',
      page_index: 0,
    }),
  }).then((e) => e.json())

  return (
    <>
      <section className="px-4 md:px-6 py-6 w-full">
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
                Your Cloud Collection
              </h2>
              <span className="inline-block text-ellipsis text-gray-500 text-sm whitespace-nowrap">
                Google Drive
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
            <CarouselItem className="pl-3 basis-[25%]">
              {/* <TrailerThumbnail
                    title={elem.name}
                    thumbnailPath={
                      (elem?.fileExtension == 'jpg') ? `https://gdrive.adi4545aditya.workers.dev${elem.link}` : '/5weKu49pzJCt06OPpjvT80efnQj.jpg'}
                    releaseDate={elem.modifiedTime}
                  /> */}

              <div className="overflow-hidden group">
                <div className="relative group-hover:border-2 group-hover:border-yellow-500 mb-1 rounded-md w-full overflow-hidden aspect-[2/3]">
                  <div className="top-0 left-0 z-10 absolute flex justify-center items-center bg-black/25 opacity-100 w-full h-full transition-all">
                    <SkipBackIcon className="w-10 h-10 text-black" />
                  </div>
                  <div className="top-0 left-0 z-10 absolute flex justify-center items-center bg-black/25 opacity-0 group-hover:opacity-100 w-full h-full transition-all">
                    {/* <SkipBackIcon className="w-10 h-10 text-white" /> */}
                  </div>
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <Link href={`/cloud`}>
                    <p className="px-1 font-semibold text-sm truncate">Back</p>
                  </Link>
                  <span className="px-1 text-xs truncate">Previous Page</span>
                </div>
              </div>
            </CarouselItem>
            {staticData &&
              staticData?.data?.files.map((elem: any, index: any) => (
                <CarouselItem key={index} className="pl-3 basis-[25%]">
                  {/* <TrailerThumbnail
                    title={elem.name}
                    thumbnailPath={
                      (elem?.fileExtension == 'jpg') ? `https://gdrive.adi4545aditya.workers.dev${elem.link}` : '/5weKu49pzJCt06OPpjvT80efnQj.jpg'}
                    releaseDate={elem.modifiedTime}
                  /> */}

                  <div className="overflow-hidden group">
                    <div className="relative group-hover:border-2 group-hover:border-yellow-500 mb-1 rounded-md w-full overflow-hidden aspect-[2/3]">
                      <Image
                        className="w-full h-full"
                        src={
                          elem?.fileExtension == 'jpg'
                            ? `${googleDriveIndexURL}${elem.link}`
                            : 'https://image.tmdb.org/t/p/original/5weKu49pzJCt06OPpjvT80efnQj.jpg'
                        }
                        alt={
                          elem?.fileExtension == 'jpg'
                            ? `${googleDriveIndexURL}${elem.link}`
                            : '/5weKu49pzJCt06OPpjvT80efnQj.jpg'
                        }
                        height={150}
                        width={150}
                      />
                      <div className="top-0 left-0 z-10 absolute flex justify-center items-center bg-black/25 opacity-0 group-hover:opacity-100 w-full h-full transition-all">
                        <CirclePlayIcon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                      <Link href={`/cloud/${elem.name}`}>
                        <p className="px-1 font-semibold text-sm truncate">
                          {elem.name}
                        </p>
                      </Link>
                      <span className="px-1 text-xs truncate">
                        {elem.modifiedTime}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </section>

      <p>{apiToHit}</p>

      <div>
        <pre>{staticData && JSON.stringify(staticData, null, 2)}</pre>
        <div>
          {staticData &&
            staticData?.data?.files.map((elem: any) => (
              <p
                key={elem.id}
                className={
                  elem.mimeType == 'application/vnd.google-apps.folder'
                    ? 'font-bold'
                    : ''
                }
              >
                {elem.name}
              </p>
            ))}
        </div>
      </div>
    </>
  )
}

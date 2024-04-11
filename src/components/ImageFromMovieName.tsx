'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Loader2 } from 'lucide-react'

interface ImageFromMovieNameProps {
  name: string
}

const ImageFromMovieName: FC<ImageFromMovieNameProps> = ({ name }) => {
  const [imageUrl, setImageUrl] = useState('')

  const getMovieDetailsFromWeb = async () => {
    // Fetch movie details from a web API (replace this with your actual implementation)
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=727bbdc1&s=${name}`
    )
    const data = await response.json()
    const imageUrl = data.Search[0].Poster
    setImageUrl(imageUrl)
    console.log(data)
  }

  useEffect(() => {
    getMovieDetailsFromWeb()
  }, [name])

  return imageUrl ? (
    <Image
      className="w-full h-full"
      src={imageUrl}
      alt={name}
      height={150}
      width={150}
    />
  ) : (
    <div className="flex justify-center items-center w-full h-full">
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  )
}

export default ImageFromMovieName

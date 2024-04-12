'use client'

import VideoJS from '@/components/VideoJS'
import { FC, useRef } from 'react'

interface MoviePlayerProps {
  src: string
}

const MoviePlayer: FC<MoviePlayerProps> = ({ src }) => {
  const playerRef = useRef(null)

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: src ?? 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video/mp4',
      },
    ],
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player
  }

  return (
    <div className="rounded-xl w-full h-full overflow-hidden">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  )
}

export default MoviePlayer

'use client'

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Button } from './ui/Button'
import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs'
import { mcn } from '@/lib/utils'

interface IProps {
  video: string
}

export const Video = ({ video }: IProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const onClicked = () => {
    setIsPlaying(prev => !prev)
  }
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  return (
    <div className="absolute top-0 left-0 w-full h-full group">
      <div
        className={mcn(
          isPlaying ? 'opacity-100' : 'opacity-0',
          'w-full h-full'
        )}
      >
        {isLoaded && (
          <ReactPlayer
            url={video}
            width="100%"
            height="100%"
            playing={isPlaying}
            loop
            controls={false}
            stopOnUnmount
          />
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full" />
      <Button
        onClick={onClicked}
        variant="icon"
        className="rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-0 text-6xl"
      >
        {isPlaying ? (
          <BsPauseCircle className="opacity-0 group-hover:opacity-100" />
        ) : (
          <BsPlayCircle />
        )}
      </Button>
    </div>
  )
}

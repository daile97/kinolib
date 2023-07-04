'use client'

import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import fallback from '../../public/poster_fallback.png'

interface IProps {
  filePath: string
  title: string
  id: number
  route: string
}

export const MovieCard: FC<IProps> = ({ filePath, title, id, route }) => {
  const { poster } = imageConfigs
  return (
    <div className="rounded-md overflow-hidden">
      <Link href={`/${route}/${id}`}>
        <div className='overflow-hidden'>
          <Image
            src={getImageUrl(poster.lg.route, filePath || '') || fallback}
            alt="poster"
            width={poster.lg.width}
            height={poster.lg.height}
            className="block w-full h-full hover:scale-125 transition-transform duration-500"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAGElEQVR42mNkY5Q/yEAEYBxVOKpwECkEAP7jD2ldWTIFAAAAAElFTkSuQmCC"
          />
        </div>
      <h2 className='text-sm font-semibold'>{title}</h2>
      </Link>
    </div>
  )
}

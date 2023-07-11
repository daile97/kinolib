'use client'

import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import fallback from '../../public/poster_fallback.png'
import { blurDataUrl } from '@/lib/pageConfigs'

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
            src={getImageUrl(poster.sm.route, filePath || '') || fallback}
            alt="poster"
            width={poster.sm.width}
            height={poster.sm.height}
            className="block w-full h-full hover:scale-125 transition-transform duration-500"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </div>
      <h2 className='font-semibold mt-1 text-md'>{title}</h2>
      </Link>
    </div>
  )
}

import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'
import { Video } from './Video'
import fallback from '../../public/backdrop_fallback.png'
import { blurDataUrl } from '@/lib/pageConfigs'

interface IProps {
  filePath: string
  video: string | null
}

export const DetailHero: FC<IProps> = ({ filePath, video }) => {
  const { backdrop } = imageConfigs
  return (
    <section className="w-full relative aspect-video mt-5 rounded-md overflow-hidden">
      <Image
        src={getImageUrl(backdrop.lg.route, filePath || '') || fallback}
        width={backdrop.lg.width}
        height={backdrop.lg.height}
        alt="hero image"
        className="w-full h-full block"
        placeholder='blur'
        blurDataURL={blurDataUrl}
      />
      {video && <Video video={video} />}
    </section>
  )
}

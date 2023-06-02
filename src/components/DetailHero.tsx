import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

interface IProps {
  filePath: string
}

export const DetailHero: FC<IProps> = ({ filePath }) => {
  const { backdrop } = imageConfigs
  return (
    <section className="w-full aspect-video mt-5">
      <Image
        src={getImageUrl(backdrop.lg.route, filePath || '')}
        width={backdrop.lg.width}
        height={backdrop.lg.height}
        alt="hero image"
        className="w-full h-full block rounded-md"
      />
    </section>
  )
}

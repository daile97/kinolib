import { imageConfigs } from '@/lib/tmdb'
import { ISeason } from '@/lib/types'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'
import fallback from '../../public/poster_fallback.png'
import { blurDataUrl } from '@/lib/pageConfigs'
import { SectionTitle } from './ui/SectionTitle'

interface IProps {
  seasons: ISeason[]
}

export const Seasons: FC<IProps> = ({ seasons }) => {
  const { poster } = imageConfigs
  return (
    <section>
      <SectionTitle>Mùa phim</SectionTitle>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2">
        {seasons.map(season => (
          <div key={season.id}>
            <div className="w-full aspect-[3/4]">
              <Image
                src={
                  getImageUrl(poster.sm.route, season.poster_path || '') ||
                  fallback
                }
                width={poster.sm.width}
                height={poster.sm.height}
                alt="poster"
                className="w-full h-full block rounded-md"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
            <h3>{season.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

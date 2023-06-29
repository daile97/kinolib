import { imageConfigs } from '@/lib/tmdb'
import { ISeason } from '@/lib/types'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

interface IProps {
  seasons: ISeason[]
}

export const Seasons: FC<IProps> = ({ seasons }) => {
  const { poster } = imageConfigs
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Mùa phim</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2">
        {seasons.map(season => (
          <div key={season.id}>
            <div className="w-full aspect-[3/4]">
              <Image
                src={getImageUrl(poster.sm.route, season.poster_path || '')}
                width={poster.sm.width}
                height={poster.sm.height}
                alt="poster"
                className="w-full h-full block rounded-md"
              />
            </div>
            <h3>{season.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

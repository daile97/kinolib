import { imageConfigs } from '@/lib/tmdb'
import { IColection } from '@/lib/types'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'
import fallback from '../../public/poster_fallback.png'
import { blurDataUrl } from '@/lib/pageConfigs'

interface IProps {
  collection: IColection
}

export const Collection: FC<IProps> = ({ collection }) => {
  const { poster } = imageConfigs
  console.log(getImageUrl(poster.lg.route, collection.poster_path || ''))
  return (
    <div>
      <h2 className="font-semibold text-lg mb-2">Tuyển tập</h2>
      <div>
        <Image
          src={
            getImageUrl(poster.lg.route, collection.poster_path || '') ||
            fallback
          }
          alt="collection poster"
          width={poster.lg.width}
          height={poster.lg.height}
          className="w-40 rounded-md"
          placeholder='blur'
          blurDataURL={blurDataUrl}
        />
        <h3 className="font-semibold text-zinc-300">{collection.name}</h3>
      </div>
    </div>
  )
}

import { imageConfigs } from '@/lib/tmdb'
import { IColection } from '@/lib/types'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

interface IProps {
  collection: IColection
}

export const Collection: FC<IProps> = ({ collection }) => {
  const { poster, backdrop } = imageConfigs
  return (
    <div>
      <h2 className="font-semibold text-lg mb-2">Tuyển tập</h2>
      <div>
      <Image
        src={getImageUrl(poster.lg.route, collection.poster_path || '')}
        alt="collection poster"
        width={poster.lg.width}
        height={poster.lg.height}
        className="w-40 rounded-md"
      />
      <h3 className='font-semibold text-zinc-300'>{collection.name}</h3>
      </div>
    </div>
  )
}

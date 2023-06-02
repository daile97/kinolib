import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

interface IProps {
  filePath: string
  name: string
}

export const CastCard: FC<IProps> = ({ filePath, name }) => {
  const { profile } = imageConfigs
  return (
    <div className='flex flex-col items-center'>
      <div className='rounded-full overflow-hidden w-14 h-14'>
        <Image
          src={getImageUrl(profile.sm.route, filePath)}
          width={profile.sm.width}
          height={profile.sm.height}
          alt="profile image"
          className='w-full h-full object-center object-fill block'
        />
      </div>
      <div>
        <p className='text-sm text-center'>{name}</p>
      </div>
    </div>
  )
}
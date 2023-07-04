import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'
import fallback from '../../public/profile_fallback_round.png'

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
          src={getImageUrl(profile.sm.route, filePath) || fallback}
          width={profile.sm.width}
          height={profile.sm.height}
          alt="profile image"
          className='w-full h-full object-center object-cover block'
        />
      </div>
      <div>
        <p className='text-sm font-semibold text-center'>{name}</p>
      </div>
    </div>
  )
}

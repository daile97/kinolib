import { ICast } from '@/lib/types'
import { FC } from 'react'
import { CastCard } from './CastCard'

interface IProps {
  casts: ICast[]
}

export const Cast: FC<IProps> = ({ casts }) => {
  return (
    <div>
      <h2 className='text-xl font-bold mb-1'>Diễn viên</h2>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 w-3/4 md:w-2/3 mx-auto">
        {casts.map(cast => (
          <CastCard
            filePath={cast.profile_path}
            name={cast.name}
            key={cast.id}
          />
        ))}
      </div>
    </div>
  )
}

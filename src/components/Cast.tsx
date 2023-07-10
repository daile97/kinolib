import { ICast } from '@/lib/types'
import { FC } from 'react'
import { CastCard } from './CastCard'
import { SectionTitle } from './ui/SectionTitle'

interface IProps {
  casts: ICast[]
}

export const Cast: FC<IProps> = ({ casts }) => {
  return (
    <div>
      <SectionTitle>Diễn viên</SectionTitle>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 w-3/4 md:w-2/3 mx-auto">
        {casts.map(cast => (
          <CastCard
            filePath={cast.profile_path}
            name={cast.name}
            key={cast.id}
            id={cast.id}
          />
        ))}
      </div>
    </div>
  )
}

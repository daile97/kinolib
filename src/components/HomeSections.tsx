import { FC } from 'react'
import { ISection } from '@/lib/pageConfigs'
import { MovieList } from './MovieList'
import { SectionTitle } from './ui/SectionTitle'

export const HomeSection: FC<ISection> = ({ title, lists }) => {
  return (
    <section>
      <SectionTitle className='mb-0'>{title}</SectionTitle>
      <div className="flex flex-col gap-2">
        {lists.map((list, i) => (
          <MovieList
            key={i}
            title={list.title}
            getData={list.getData}
            vertical={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}

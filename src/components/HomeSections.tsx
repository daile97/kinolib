import { FC } from 'react'
import { ISection } from '@/lib/pageConfigs'
import { MovieList } from './MovieList'

export const HomeSection: FC<ISection> = ({ title, lists }) => {
  return (
    <section className='mt-5'>
      <h2 className='text-2xl font-bold'>{title}</h2>
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

import { IGenre } from '@/lib/types'
import { FC } from 'react'
import { RxStarFilled } from 'react-icons/rx'
import { SectionTitle } from './ui/SectionTitle'

interface IProps {
  title: string
  overview: string
  tagline: string
  rating: number
  genres: IGenre[]
}

export const Info: FC<IProps> = ({
  title,
  overview,
  tagline,
  rating,
  genres
}) => {
  return (
    <section>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-yellow-300 font-semibold flex items-center gap-1">
        <RxStarFilled />
        {rating.toFixed(1)}
        <span className="text-zinc-300 text-sm font-normal ml-2">
          {genres.map(
            (genre, i) => `${genre.name}${i < genres.length - 1 ? ', ' : ''}`
          )}
        </span>
      </p>
      {tagline && (
        <blockquote className="text-center italic my-2">
          &ldquo;{tagline}&rdquo;
        </blockquote>
      )}{' '}
      <SectionTitle className='mb-1'>Nội dung chính</SectionTitle>
      <p className='leading-tight'>{overview || <span className="italic">Đang cập nhật</span>}</p>
    </section>
  )
}

import { FC } from 'react'

interface IProps {
  title: string
  overview: string
  tagline: string
}

export const Info: FC<IProps> = ({ title, overview, tagline }) => {
  return (
    <section className='mt-3'>
      <h1 className='font-bold text-xl'>{title}</h1>
      <blockquote className='text-center italic'>"{tagline}"</blockquote>
      <p>{overview}</p>
    </section>
  )
}

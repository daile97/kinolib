import { IImage } from '@/lib/types'
import { FC } from 'react'
import { Carousel } from './ui/Carousel'
import { Slide } from './ui/Slide'
import { imageConfigs } from '@/lib/tmdb'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'
import fallback from '../../public/backdrop_fallback.png'
import { blurDataUrl } from '@/lib/pageConfigs'

interface IProps {
  images: IImage[]
}

export const MovieImage: FC<IProps> = ({ images }) => {
  const { backdrop } = imageConfigs
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Hình ảnh phim</h2>
      <Carousel>
        {images.length > 0 ? (
          images.map(image => (
            <Slide
              key={image.file_path}
              variant="detailPage"
            >
              <Image
                src={
                  getImageUrl(backdrop.lg.route, image.file_path || '') ||
                  fallback
                }
                alt="movie image"
                width={image.width}
                height={image.width * image.aspect_ratio}
                className="w-full h-full block"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </Slide>
          ))
        ) : (
          <p className="text-zinc-300 italic">Đang cập nhật</p>
        )}
      </Carousel>
    </section>
  )
}

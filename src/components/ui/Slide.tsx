import { mcn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

const slideVariant = cva('relative flex-grow-0 flex-shrink-0 rounded-md', {
  variants: {
    variant: {
      full: 'basis-full',
      vertical: 'basis-1/3 md:basis-1/4 xl:basis-1/5',
      horizontal: 'basis-[60%] md:basis-1/3 xl:basis-1/4',
      detailPage: 'basis-full md:basis-1/2 w-full aspect-video'
    }
  }
})

interface IProps
  extends VariantProps<typeof slideVariant>,
    HTMLAttributes<HTMLDivElement> {}

export const Slide: FC<IProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <div
      className={mcn(slideVariant({ variant, className }))}
      {...props}
    >
      {children}
    </div>
  )
}

import { mcn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

const slideVariant = cva('relative flex-grow-0 flex-shrink-0 rounded-md overflow-hidden', {
  variants: {
    variant: {
      full: 'basis-full',
      vertical: '',
      horizontal: ''
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

import { mcn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

export const buttonVariant = cva('block rounded-md', {
  variants: {
    variant: {
      primary:
        'bg-gradient-to-r from-red-600 via-[#ea384d] to-[#d31027] bg-[length:200%_auto] transition-all duration-500',
      navItem:
        'font-semibold px-2 text-zinc-300 hover:text-white hover:bg-[rgba(100,100,100,0.5)] hover:backdrop-blur-md'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

interface ButtonProps
  extends VariantProps<typeof buttonVariant>,
    HTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={mcn(buttonVariant({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  )
}

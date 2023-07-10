import { mcn } from '@/lib/utils'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

export const SectionTitle: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={mcn(
        'font-bold text-xl md:text-2xl text-zinc-200 mb-2',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

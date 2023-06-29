import { FC } from 'react'
import { Button } from './Button'
import Link from 'next/link'

interface IProps {
  title: string
  href: string
}

export const SlideHoverLayer: FC<IProps> = ({ title, href }) => {
  return (
    <div className="absolute w-full px-2 h-full rounded-md top-0 left-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm backdrop-saturate-200 flex flex-col items-center justify-center opacity-0 hover:opacity-100 gap-1">
      <h4 className="font-semibold text-sm text-center">{title}</h4>
      <Button className="px-2 py-1 text-sm">
        <Link href={href}>Xem chi tiết</Link>
      </Button>
    </div>
  )
}

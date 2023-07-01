'use client'

import { mcn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useCallback, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

interface IProps {
  mobile: boolean
}

export const SearchBox = ({ mobile }: IProps) => {
  const router = useRouter()
  const [term, setTerm] = useState<string>('')

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }, [])

  const onSearch = () => {
    router.push(`/tim-kiem/${term}`)
  }

  return (
    <div className={mcn('mx-2', mobile ? 'px-3' : 'hidden md:flex')}>
      <div className="flex pr-2 justify-between gap-2 items-center border-[1px] border-zinc-300 rounded-md">
        <input
          type="text"
          placeholder="Nhập từ khoá tìm kiếm"
          value={term}
          onChange={onChange}
          className="px-2 text-zinc-100 bg-transparent border-none outline-none"
        />
        <BiSearch
          className="text-xl"
          onClick={onSearch}
        />
      </div>
    </div>
  )
}

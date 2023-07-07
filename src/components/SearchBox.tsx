import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Button } from './ui/Button'

export const SearchBox = () => {
  const router = useRouter()
  const [term, setTerm] = useState<string>('')
  const [isOpened, setIsOpened] = useState(false)

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }, [])

  const onOpen = useCallback(() => {
    setIsOpened(true)
  }, [])

  const onSearch = (e: FormEvent) => {
    e.preventDefault()
    if (!term) return
    router.push(`/tim-kiem/${term}`)
    setTerm('')
    setIsOpened(false)
  }

  return (
    <div className="ml-5 flex">
      {isOpened && (
        <form
          onSubmit={onSearch}
          className="flex pr-2 justify-between gap-2 items-center border-[1px] border-zinc-300 rounded-md"
        >
          <input
            type="text"
            placeholder="Nhập từ khoá tìm kiếm"
            value={term}
            onChange={onChange}
            className="px-2 text-zinc-100 bg-transparent border-none outline-none w-full"
            onBlur={() => setIsOpened(false)}
            autoFocus
          />
          <button type="submit">
            <BiSearch className="text-xl" />
          </button>
        </form>
      )}
      {!isOpened && (
        <Button
          variant="navItem"
          className="py-2 mx-2"
          onClick={onOpen}
        >
          <BiSearch />
        </Button>
      )}
    </div>
  )
}

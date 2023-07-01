'use client'

import Link from 'next/link'
import { MainNav } from './MainNav'
import { Button } from './ui/Button'
import { useCallback, useState } from 'react'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { MobileNav } from './MobileNav'
import { SearchBox } from './SearchBox'

export const Navbar = () => {
  const [isMenuOpend, setIsMenuOpened] = useState<boolean>(false)

  const onMenuButtonClicked = useCallback(() => {
    setIsMenuOpened(prevState => !prevState)
  }, [])

  return (
    <header className="sticky top-0 left-0 w-full z-50 h-12 px-5 md:px-12 lg:px-40 flex items-center justify-between bg-[rgba(100,100,100,0.4)] backdrop-blur-md backdrop-saturate-200">
      <h1 className="font-bold text-zinc-300 hover:text-white">
        <Link href="/">Kinolib</Link>
      </h1>
      <div className='flex-1' />
      <SearchBox mobile={false} />
      <MainNav />
      {isMenuOpend && <MobileNav />}
      <Button
        variant="navItem"
        className="py-2 md:hidden"
        onClick={onMenuButtonClicked}
      >
        {isMenuOpend ? <RxCross2 /> : <RxHamburgerMenu />}
      </Button>
    </header>
  )
}

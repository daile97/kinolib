import { navItems } from '@/lib/pageConfigs'
import { Button } from './ui/Button'
import Link from 'next/link'
import { SearchBox } from './SearchBox'

export const MobileNav = () => {
  return (
    <nav className="md:hidden fixed left-0 top-12 w-full h-[calc(100vh-48px)] bg-[rgba(0,0,20,0.8)] backdrop-blur-md backdrop-saturate-200">
      <ul className="flex flex-col px-3 py-10 gap-2 text-xl">
        {navItems.map(item => (
          <li key={item.id}>
            <Button
              variant="navItem"
              className="w-full text-left"
            >
              <Link
                className="w-full block"
                href={item.route}
              >
                {item.title}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
      <SearchBox mobile />
    </nav>
  )
}

import { navItems } from '@/lib/pageConfigs'
import Link from 'next/link'
import { Button } from './ui/Button'
import { usePathname } from 'next/navigation'
import { mcn } from '@/lib/utils'

export const MainNav = () => {
  const pathName = usePathname()
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {navItems.map(item => (
          <li key={item.id}>
            <Button variant="navItem">
              <Link
                className={mcn(
                  pathName.startsWith(item.route)
                    ? 'text-white font-bold'
                    : 'text-zinc-300'
                )}
                href={item.route}
              >
                {item.title}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

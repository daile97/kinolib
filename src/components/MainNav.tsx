import { navItems } from '@/lib/pageConfigs'
import Link from 'next/link'
import { Button } from './ui/Button'

export const MainNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {navItems.map(item => (
          <li key={item.id}>
            <Button variant='navItem'>
              <Link href={item.route}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

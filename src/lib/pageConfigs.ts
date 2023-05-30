interface INavItem {
  title: string
  id: number
  route: string
}

export const navItems: INavItem[] = [
  {
    title: 'Phim lẻ',
    route: '/phim-le',
    id: 1
  },
  {
    title: 'Phim bộ',
    route: '/phim-bo',
    id: 2
  },
  {
    title: 'Diễn viên',
    route: '/dien-vien',
    id: 3
  }
]

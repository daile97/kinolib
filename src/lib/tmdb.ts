import { IImageConfigs } from './types'

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN

export const baseUrl = 'https://api.themoviedb.org/3'

export const imageBaseUrl = 'https://image.tmdb.org/t/p'

export const fetchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
  }
}

export const imageConfigs: IImageConfigs = {
  backdrop: {
    lg: {
      route: '/w1280',
      height: 720,
      width: 1280
    },
    sm: {
      route: '/w780',
      height: 438.75,
      width: 780
    }
  },
  poster: {
    lg: {
      route: '/w780',
      height: 1170,
      width: 780
    },
    sm: {
      route: '/w500',
      height: 750,
      width: 500
    }
  },
  profile: {
    lg: {
      route: '/h632',
      height: 632,
      width: 421
    },
    sm: {
      route: '/w185',
      height: 277.5,
      width: 185
    }
  }
}

export const genres = [
  {
    id: 28,
    name: 'Phim Hành Động'
  },
  {
    id: 12,
    name: 'Phim Phiêu Lưu'
  },
  {
    id: 16,
    name: 'Phim Hoạt Hình'
  },
  {
    id: 35,
    name: 'Phim Hài'
  },
  {
    id: 80,
    name: 'Phim Hình Sự'
  },
  {
    id: 99,
    name: 'Phim Tài Liệu'
  },
  {
    id: 18,
    name: 'Phim Chính Kịch'
  },
  {
    id: 10751,
    name: 'Phim Gia Đình'
  },
  {
    id: 14,
    name: 'Phim Giả Tượng'
  },
  {
    id: 36,
    name: 'Phim Lịch Sử'
  },
  {
    id: 27,
    name: 'Phim Kinh Dị'
  },
  {
    id: 10402,
    name: 'Phim Nhạc'
  },
  {
    id: 9648,
    name: 'Phim Bí Ẩn'
  },
  {
    id: 10749,
    name: 'Phim Lãng Mạn'
  },
  {
    id: 878,
    name: 'Phim Khoa Học Viễn Tưởng'
  },
  {
    id: 10770,
    name: 'Chương Trình Truyền Hình'
  },
  {
    id: 53,
    name: 'Phim Gây Cấn'
  },
  {
    id: 10752,
    name: 'Phim Chiến Tranh'
  },
  {
    id: 37,
    name: 'Phim Miền Tây'
  }
]

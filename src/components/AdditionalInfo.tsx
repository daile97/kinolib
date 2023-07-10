import { FC } from 'react'
import { SectionTitle } from './ui/SectionTitle'

interface IProps {
  originalTitle: string
  releaseDate: string
  runtime: number
}

export const AdditionalInfo: FC<IProps> = ({
  releaseDate,
  runtime,
  originalTitle
}) => {
  return (
    <section>
      <SectionTitle>Thông tin khác</SectionTitle>
      <div>
        <h3>Tên gốc: {originalTitle}</h3>
        <h3>
          Ngày phát hành: {new Date(releaseDate).toLocaleDateString('vi')}
        </h3>
        <h3>Thời lượng: {runtime} phút</h3>
      </div>
    </section>
  )
}

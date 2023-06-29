import { FC } from "react";

interface IProps {
  originalTitle: string
  releaseDate: string
  runtime: number
}

export const AdditionalInfo:FC<IProps> = ({releaseDate, runtime, originalTitle}) => {
  return (
    <section>
      <h2 className="font-bold text-xl">Thông tin khác</h2>
      <div>
        <h3>Tên gốc: {originalTitle}</h3>
        <h3>Ngày phát hành: {new Date(releaseDate).toLocaleDateString('vi')}</h3>
        <h3>Thời lượng: {runtime} phút</h3>
      </div>
    </section>
  )
}

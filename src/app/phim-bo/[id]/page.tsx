import { DetailHero } from '@/components/DetailHero'
import { Info } from '@/components/Info'
import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl, getTVDetails } from '@/lib/utils'

const TVDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTVDetails(params.id)
  const { backdrop } = imageConfigs
  return (
    <main className="px-5 md:px-10 lg:px-40">
      <DetailHero
        filePath={getImageUrl(backdrop.lg.route, data.backdrop_path || '')}
      />
      <Info title={data.name} overview={data.overview} />
    </main>
  )
}

export default TVDetailPage

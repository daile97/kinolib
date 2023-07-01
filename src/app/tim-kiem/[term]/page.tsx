import { SearchResult } from '@/components/SearchResult'
import { getSearchResult } from '@/lib/utils'

const SearchResultPage = async ({ params }: { params: { term: string } }) => {
  const data = await getSearchResult(params.term)
  console.log(data)
  return (
    <main className="px-5 md:px-12 lg:px-40">
      <h2>Kết quả tìm kiếm</h2>
      <SearchResult data={data.results} />
    </main>
  )
}

export default SearchResultPage

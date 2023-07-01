import { Discover } from "@/components/Discover"

const TVPage = () => {
  return (
    <main className="px-5 md:px-12 lg:px-40 mt-5">
      <h2 className="text-2xl font-bold mb-3">Phim bộ</h2>
      <Discover mediaType="tv" />
    </main>
  )
}

export default TVPage

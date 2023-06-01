import { getTrending } from "@/lib/utils"

const Home = async () => {
  const data = await getTrending()

  return (
    <main className='bg-red-500 text-white'>
      <h1>Hello</h1>
    </main>
  )
}

export default Home

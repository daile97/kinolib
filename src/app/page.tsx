import { HomeHero } from "@/components/HomeHero"
import { getTrending } from "@/lib/utils"

const Home = async () => {
  return (
    <main className='px-5 md:px-12 lg:px-40'>
      <HomeHero />
    </main>
  )
}

export default Home

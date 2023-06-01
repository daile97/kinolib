import { HomeHero } from "@/components/HomeHero"
import { HomeSection } from "@/components/HomeSections"
import { homeConfigs } from "@/lib/pageConfigs"
import { getTrending } from "@/lib/utils"

const Home = async () => {
  return (
    <main className='px-5 md:px-12 lg:px-40'>
      <HomeHero />
      {
        homeConfigs.sections.map((section, i) => (
          <HomeSection key={i} title={section.title} lists={section.lists}/>
        ))
      }
    </main>
  )
}

export default Home

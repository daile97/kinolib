import { HomeHero } from '@/components/HomeHero'
import { HomeSection } from '@/components/HomeSections'
import { Main } from '@/components/ui/Main'
import { homeConfigs } from '@/lib/pageConfigs'

const Home = async () => {
  return (
    <Main>
      <HomeHero />
      {homeConfigs.sections.map((section, i) => (
        <HomeSection
          key={i}
          title={section.title}
          lists={section.lists}
        />
      ))}
    </Main>
  )
}

export default Home

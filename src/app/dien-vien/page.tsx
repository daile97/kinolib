import { MovieCard } from '@/components/MovieCard'
import { Main } from '@/components/ui/Main'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { getTrendingPeople } from '@/lib/utils'

const PersonPage = async () => {
  const data = await getTrendingPeople()
  return (
    <Main>
      <h1 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold">
        Diễn viên
      </h1>
      <section>
        <SectionTitle>Thịnh hành</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
          {data &&
            data.results.map(person => (
              <MovieCard
                key={person.id}
                filePath={person.profile_path}
                id={person.id}
                title={person.name}
                route="dien-vien"
              />
            ))}
        </div>
      </section>
    </Main>
  )
}

export default PersonPage

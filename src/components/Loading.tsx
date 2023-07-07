import { Spinner } from "./ui/Spinner"

export const Loading = () => {
  return (
    <main className="bg-black fixed top-0 left-0 w-screen h-screen flex items-center justify-center gap-2">
      <h1 className="font-extrabold">KINOLIB</h1>
      <Spinner />
    </main>
  )
}

import { FC, PropsWithChildren } from 'react'

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-5 md:mx-12 lg:mx-40 flex flex-col justify-center gap-4">
      {children}
    </main>
  )
}

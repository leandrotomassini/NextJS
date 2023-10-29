import NextLink from 'next/link';

import { Inter } from 'next/font/google';
import { MainLayout } from '../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1 className="title">
        Ir a
        <NextLink href="/about">
          About
        </NextLink>
      </h1>

      <h1>Home Page</h1>

      <p className={'code'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolor reiciendis eos ut ab cumque. Illo amet, quidem vel velit quam voluptatem hic possimus nam modi sed. Delectus, adipisci vitae?</p>
    </MainLayout>
  )
}

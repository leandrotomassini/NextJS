import { Inter } from 'next/font/google';
import NextLink from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        Ir a <NextLink href="/">
          Home
        </NextLink>
      </h1>


      <h1>Contact Page</h1>

      <p className={'code'}> Illo amet, quidem vel velit quam voluptatem hic possimus nam modi sed. Delectus, adipisci vitae?</p>
    </MainLayout>
  )
}

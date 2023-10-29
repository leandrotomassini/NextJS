import { Inter } from 'next/font/google';
import NextLink from 'next/link';

import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';


const inter = Inter({ subsets: ['latin'] })


export default function AboutPage() {
  return (
    <>

      <h1 className={'title'}>
        Ir a <NextLink href="/">
          Home
        </NextLink>
      </h1>


      <h1>About Page</h1>

      <p className={'code'}> Ipsa dolor reiciendis eos ut ab cumque. Illo amet, quidem vel velit quam voluptatem hic possimus nam modi sed. Delectus, adipisci vitae?</p>

    </>
  )
}


AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
}
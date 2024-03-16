'use client';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from '@nextui-org/react';

import { Theme, getTheme, setTheme } from '@/utils/theme';

export default function Home() {

  const handleThemeChange = () => {
    const newTheme = getTheme() === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme( newTheme );
  };


  return (
    <section className="flex justify-center items-center w-full h-screen">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={ 40 }
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={ 40 }
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-default-500 text-small">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
          <Button color="primary" size="lg" className="mt-3" onClick={ handleThemeChange   }>
            Change theme
          </Button>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}

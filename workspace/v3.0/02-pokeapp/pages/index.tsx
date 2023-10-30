import { Button } from '@nextui-org/react';
import { NextPage } from 'next';


const HomePage: NextPage = () => {
  return (
    <>
      <h1>Hola mundo</h1>
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Button
      </Button>
    </>
  );
}


export default HomePage;

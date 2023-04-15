import { Layout } from '../components/layouts';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>Hola mundo</Typography>
    </Layout>
  )
}

export default HomePage;
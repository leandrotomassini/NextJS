import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

import { Sidebar, NavBar } from '../ui';


interface Props {
    title?: string;
    children: React.ReactNode
}


export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>

            <Head>
                <title>{title}</title>
            </Head>

            <NavBar />

            <Sidebar />

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    );
}

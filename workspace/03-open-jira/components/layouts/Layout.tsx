import { FC } from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';

import { NavBar, Sidebar } from '../ui';

interface Props {
    title?: string;
    children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = 'OpenJira - App', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <NavBar />

            <Sidebar/>

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
};

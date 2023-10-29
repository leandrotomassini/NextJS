import { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
};

interface Props {
    text: string,
    href: string
}


export const ActiveLink: FC<Props> = ({ text, href }) => {

    const router = useRouter();

    return (
        <NextLink href={href} style={style}>
            {text}
        </NextLink>
    );
}

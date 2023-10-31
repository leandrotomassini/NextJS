import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';



export const NavBar = () => {

    const { theme } = useTheme();


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray900.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icono de la app"
                width={70}
                height={70}
                priority
            />

            <NextLink href="/" passHref style={{
                display: 'flex'
            }}>
                <Text color='white' h2>P</Text>
                <Text color='white' h3>okémon</Text>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Text color='white'>Favoritos</Text>
            </NextLink>
        </div>
    )
}

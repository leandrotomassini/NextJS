import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

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
            backgroundColor: '#16181A'
        }}>

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />


            <Link href='/' as={NextLink}>
                <Text color='white' h2>P</Text>
                <Text color='white' h3>okémon!</Text>
            </Link>


            <Spacer css={{ flex: 1 }} />
            <Link href='/favorites' as={NextLink}>
                <Text color='white'>Favoritos</Text>
            </Link>
        </div>
    );
}
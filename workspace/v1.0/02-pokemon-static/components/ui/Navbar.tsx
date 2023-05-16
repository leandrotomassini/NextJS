import { Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from 'next/link';
import Image from "next/image";
import Link from "next/link";

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
            backgroundColor: theme?.colors.gray100.value
        }}>

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            ></Image>

            <NextLink href="/" style={{
                display: 'flex'
            }}>
                <Text color="white" h2>
                    P
                </Text>
                <Text color="white" h3>
                    okemon
                </Text>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites">
                <Text color="white">
                    Favoritos
                </Text>
            </NextLink>

        </div>
    )
}
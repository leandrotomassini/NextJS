import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';


export default function Home() {

  const { data: session } = useSession();

  return (
    <>
      <h1 className="text-2xl">Cursos</h1>
      {
        session?.user ? (
          <div className='flex gap-x-2 items-center'>

            <Link href="/dashboard">
              Dashboard
            </Link>
            <p>{session.user.name} {session.user.email}</p>
   
            <button onClick={async () => {
              await signOut({
                callbackUrl: '/'
              })
            }}>Logout</button>
          </div>
        ) : (
          <button onClick={() => signIn()} className='bg-sky-400 px-3 py-2 rounded'>
            Sign In
          </button>
        )
      }
    </>
  );
}

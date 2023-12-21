import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  }
}


export default function ({ params }: Props) {

  const { id } = params;

  if (id === 'kids') {
    notFound();
  }

  return (
    <div>
      <h1>Category Id Page</h1>
    </div>
  );
}
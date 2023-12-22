import { getPaginatedProductsWithImages } from '@/actions';
import { ProductGrid, Title } from '@/components';




export default async function Home() {

  const productsTemp = await getPaginatedProductsWithImages;


  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
      
    </>
  );
}

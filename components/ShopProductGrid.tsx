import { RouteId } from '@/lib';
import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export interface ShopProductGridProps {
  products: Product[];
}

export const ShopProductGrid = ({ products }: ShopProductGridProps) => {
  return (
    <div>
      <h2 className="font-semibold text-xl pb-2">All products</h2>
      <div className="flex flex-wrap">
        {products.map((product, index) => {
          const productSlug = product.title.toLowerCase().replace(/\s/g, '-');
          return (
            <div key={product.title} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link
                href={RouteId.product(productSlug)}
                className="block relative h-48 rounded overflow-hidden"
              >
                <Image
                  alt={product.title}
                  className="object-cover object-center w-full h-full block"
                  src={
                    product.imageUrls?.[index] ??
                    'https://dummyimage.com/420x260'
                  }
                  width={0}
                  height={0}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                  {product.description}
                </h3>
                <h2 className="text-gray-900 text-lg font-medium">
                  {product.title}
                </h2>
                {/* <p className="mt-1">$16.00</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
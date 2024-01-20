import React from 'react';
import { IProduct } from './products';
import Link from 'next/link';

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const productUrl = `/data/${product.sku}`;
  return (
    <li className="py-3 sm:py-4 hover:bg-gray-200 cursor-pointer">
      <Link href={{ pathname: productUrl, query: { sku: product.sku, title: product.name, size: product.code } }}>
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {product.name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {product.sku}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          ${product.code}
        </div>
      </div>
      </Link>
    </li>
  );
};

export default ProductItem;

"use client"
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import ProductItem from '@/components/Product/ProductItem';
import { productList, IProduct } from './products';


export default function ProductList() {
  const [productText, setProductText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    // Debounce function to delay filtering
    const debounceFilter = setTimeout(() => {
      const filtered = productList.filter((product) =>
        product.title.toLowerCase().includes(productText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 300); // Adjust the delay as needed (e.g., 300ms)

    return () => clearTimeout(debounceFilter);
  }, [productText]);
  return (
    <div className="flow-root">
      <label htmlFor="product-search" className="sr-only">
        Search
      </label>
      <div className="mt-1 relative lg:w-128">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          name="email"
          id="product-search"
          value={productText}
          onChange={(e) => {
            setProductText(e.target.value);
          }}
          
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
          placeholder="Search product"
        />
      </div>
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {filteredProducts.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </ul>
    </div>
  );
}

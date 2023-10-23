'use client'
import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import Link from 'next/link';

const queryClient = new QueryClient();

function fetchProducts() {
  return fetch('https://dummyjson.com/products').then((response) => response.json());
}

function ProductList() {
  const { data, status, isFetching, isStale } = useQuery('products', fetchProducts, {
    staleTime: 600000, // Cache data for 60 seconds (adjust to your needs)
    cacheTime: 3600000, // Cache data for 1 hour (adjust to your needs)
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <p>{isFetching ? 'Data sedang diambil...' : isStale ? 'Data diambil dari cache.' : 'Data diambil dari server.'}</p>
      <Link href="/">home</Link>
      <Link href="/product">product</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ProductList />
      </div>
    </QueryClientProvider>
  );
}

export default App;

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeSwitch from "./theme-switch";

type Product = {
  id: number;
  title: string;
  thumbnail: string;
};
export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-slate-900 p-6 rounded-lg">
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div>
      <h2>Purpose</h2>
      <ThemeSwitch/>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <Image
              src={product?.thumbnail || ""}
              alt={product.title}
              width={200}
              height={200}
            />
            <p >
              {product.id} {product.title}{" "}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

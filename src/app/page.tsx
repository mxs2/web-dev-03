import Link from "next/link";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg">
            <Link href={`/products/${product.id}`}>
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </Link>
            <p className="text-sm text-gray-600">R$ {product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

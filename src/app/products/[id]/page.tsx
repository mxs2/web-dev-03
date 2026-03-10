import { products } from "@/data/products";
import { notFound } from "next/navigation";

export const revalidate = 60; // ISR: Regenera a cada 60s

type Props = {
    params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
    const resolvedParams = await params;

    const product = products.find((p) => p.id === resolvedParams.id);

    if (!product) return notFound();

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="mt-2">{product.description}</p>
            <p className="mt-4 font-semibold text-blue-600">Preço: R$ {product.price}</p>
        </main>
    );
}
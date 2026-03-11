// src/data/products.ts
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Notebook Gamer",
    description: "Notebook potente para jogos.",
    price: 5500,
  },
  {
    id: "2",
    name: "Mouse sem fio",
    description: "Mouse ergonômico para trabalho.",
    price: 120,
  },
  {
    id: "3",
    name: "Monitor 27'' 4K",
    description: "Monitor de alta resolução.",
    price: 1800,
  },
];

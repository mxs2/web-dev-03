interface PageProps {
  // 1. Atualize a tipagem para indicar que params é uma Promise
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  // Rotas geradas no build: /blog/1, /blog/2 e /blog/3
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <main>
      <h1>Post {resolvedParams.id}</h1>
      <p>Esta página foi gerada estaticamente durante o build.</p>
    </main>
  );
}

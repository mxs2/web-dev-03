interface PageProps {
  params: Promise<{ nome: string }>;
}

export default async function AlunoPage({ params }: PageProps) {
  const { nome } = await params;
  return (
    <main>
      <h1>Aluno: {nome}</h1>
      <p>Exemplo de rota dinâmica no App Router.</p>
    </main>
  );
}

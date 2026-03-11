export default async function TempoPage() {
  const now = new Date().toISOString();
  return (
    <main>
      <h1>Hora do servidor</h1>
      <p>{now}</p>
    </main>
  );
}

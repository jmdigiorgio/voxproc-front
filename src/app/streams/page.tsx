import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function StreamsPage() {
  const session = await auth();

  if (!session.userId) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Streams</h1>
    </div>
  );
}

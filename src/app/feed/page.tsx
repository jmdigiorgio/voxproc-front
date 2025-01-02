import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function FeedPage() {
  const session = await auth();

  if (!session.userId) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto px-4 py-8 font-mono">
      <h1 className="text-4xl font-bold text-neutral-900 mb-4">
        Under Construction!
      </h1>
      <p className="text-neutral-600">
        This is where logged in users land. Lots of good stuff planned.
      </p>
    </div>
  );
}

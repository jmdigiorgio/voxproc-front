import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { CreateStreamForm } from '@/components/streams/CreateStreamForm';

export default async function StreamsPage() {
  const session = await auth();

  if (!session.userId) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto pt-8 flex justify-center">
      <div className="w-full max-w-md">
        <CreateStreamForm />
      </div>
    </div>
  );
}

import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Queue } from '@/components/layout/Queue';
import { Streams } from '@/components/layout/Streams';
import { ContentViewer } from '@/components/layout/ContentViewer';
import { CommunityFeed } from '@/components/layout/CommunityFeed';

export default async function FeedPage() {
  const session = await auth();

  if (!session.userId) {
    redirect('/login');
  }

  return (
    <div className="flex h-[calc(100vh-5.5rem-10rem)]">
      <Queue />
      <div className="w-1/2 flex flex-col h-full">
        <ContentViewer />
        <CommunityFeed />
      </div>
      <Streams />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

export function CreateStreamForm() {
  const [streamName, setStreamName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement stream creation logic
    console.log('Creating stream:', { streamName, description, tags });
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()]);
      }
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create New Stream</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="streamName">Stream Name</Label>
            <Input
              id="streamName"
              value={streamName}
              onChange={e => setStreamName(e.target.value)}
              placeholder="Enter stream name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter stream description"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md flex items-center gap-1 text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-destructive"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
            <Input
              id="tags"
              value={currentTag}
              onChange={e => setCurrentTag(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Type a tag and press Enter"
            />
          </div>
          <Button type="submit" className="w-full">
            Create Stream
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

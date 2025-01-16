'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Plus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Account = {
  name: string;
  platform: string;
};

const validateBlueSkyHandle = (handle: string): string | null => {
  // Remove @ if present at start
  const cleanHandle = handle.startsWith('@') ? handle.slice(1) : handle;

  if (!cleanHandle) return 'Account name is required';
  if (cleanHandle.length < 3)
    return 'Account name must be at least 3 characters';
  if (cleanHandle.length > 20)
    return 'Account name must be at most 20 characters';

  // Check for valid characters (only alphanumeric, period, and hyphen)
  if (!/^[a-zA-Z0-9.-]+$/.test(cleanHandle)) {
    return 'Account name can only contain letters, numbers, periods, and hyphens';
  }

  // Check for invalid patterns
  if (cleanHandle.includes('..') || cleanHandle.includes('--')) {
    return 'Account name cannot contain consecutive periods or hyphens';
  }

  if (
    cleanHandle.startsWith('.') ||
    cleanHandle.endsWith('.') ||
    cleanHandle.startsWith('-') ||
    cleanHandle.endsWith('-')
  ) {
    return 'Account name cannot start or end with a period or hyphen';
  }

  return null;
};

export function CreateStreamForm() {
  const [streamName, setStreamName] = useState('');
  const [description, setDescription] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountError, setAccountError] = useState<string | null>(null);
  const [platform, setPlatform] = useState('bluesky');
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement stream creation logic
    console.log('Creating stream:', {
      streamName,
      description,
      accounts,
      tags,
    });
  };

  const handleAddAccount = () => {
    if (platform === 'bluesky') {
      const error = validateBlueSkyHandle(accountName);
      if (error) {
        setAccountError(error);
        return;
      }
    }

    if (accountName.trim()) {
      setAccounts([...accounts, { name: accountName.trim(), platform }]);
      setAccountName('');
      setPlatform('bluesky');
      setAccountError(null);
    }
  };

  const handleAccountNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
    if (platform === 'bluesky') {
      const error = validateBlueSkyHandle(e.target.value);
      setAccountError(error);
    } else {
      setAccountError(null);
    }
  };

  const removeAccount = (accountToRemove: Account) => {
    setAccounts(
      accounts.filter(
        acc =>
          acc.name !== accountToRemove.name ||
          acc.platform !== accountToRemove.platform
      )
    );
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
          <div className="space-y-2">
            <Label htmlFor="accountName">Accounts</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {accounts.map((account, index) => (
                <span
                  key={index}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md flex items-center gap-1 text-sm"
                >
                  {account.name} ({account.platform})
                  <button
                    type="button"
                    onClick={() => removeAccount(account)}
                    className="hover:text-destructive"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  id="accountName"
                  value={accountName}
                  onChange={handleAccountNameChange}
                  placeholder="Enter account name"
                  className={accountError ? 'border-destructive' : ''}
                />
                <Select value={platform} onValueChange={setPlatform}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bluesky">BlueSky</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="button"
                  size="icon"
                  onClick={handleAddAccount}
                  disabled={!accountName.trim() || !!accountError}
                >
                  <Plus size={16} />
                </Button>
              </div>
              {accountError && (
                <p className="text-sm text-destructive">{accountError}</p>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full">
            Create Stream
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

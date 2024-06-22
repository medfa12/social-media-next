'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { SignOutButton } from '@/components/AuthButtons';

export function ProfileForm({ user }: { user: any }) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };
    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Edit Your Profile</CardTitle>
        <CardDescription>Make changes to your profile here. Click save when you're done.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={updateUser}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue={user?.name ?? ''} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                defaultValue={user?.bio ?? ''}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" defaultValue={user?.age ?? 0} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image">Profile Image URL</Label>
              <Input id="image" name="image" defaultValue={user?.image ?? ''} />
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4">
            <Button type="submit">Save changes</Button>
          </CardFooter>
        </form>
      </CardContent>
      <SignOutButton/>
    </Card>
  );
}
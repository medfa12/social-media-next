"use client"

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface Props { 
    targetUserId: string;
    isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isMutating = isFetching || isPending;

    const follow = async () => {
        setIsFetching(true);

        const res = await fetch('/api/follow', {
            method: 'POST',
            body: JSON.stringify({ targetUserId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setIsFetching(false);

        console.log(res)

        startTransition(() => {
            router.refresh();
        });
    }

    const unfollow = async () => {
        setIsFetching(true);

        const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: 'DELETE',
        });

        setIsFetching(false);
        startTransition(() => router.refresh());
    }

    return (
        <Button
            onClick={isFollowing ? unfollow : follow}
            variant={isFollowing ? "secondary" : "default"}
            disabled={isMutating}
        >
            {isMutating ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                </>
            ) : (
                isFollowing ? 'Unfollow' : 'Follow'
            )}
        </Button>
    )
}
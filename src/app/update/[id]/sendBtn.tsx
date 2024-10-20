'use client'
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const UpdateButton = ({ postId }: { postId: string }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchPost = async () => {
            const { data: post } = await supabase
                .from('post')
                .select('*')
                .eq('id', postId)
                .single();

            setTitle(post.title);
            setContent(post.content);
        };

        fetchPost();
    }, [postId]);

    const handleDelete = async () => {
        await supabase
            .from('post')
            .update({ title, content })
            .eq('id', postId);

        router.push('/');
    };

    return (
        <button className="btn btn-warning" onClick={handleDelete}>
            수정
        </button>
    );
};

export default UpdateButton;

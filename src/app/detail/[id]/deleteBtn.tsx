'use client'
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

const DeleteButton = ({postId}: {postId: string}) => {
    const router = useRouter();

    const handleDelete = async () => {
        await supabase
            .from('post')
            .delete()
            .eq('id', postId);

        router.push('/');
    };

    return (
        <button className="btn btn-error" onClick={handleDelete}>
            삭제
        </button>
    );
};

export default DeleteButton;

'use client'
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();
    return (
        <button className="btn btn-primary" onClick={() => router.back()}>
            목록
        </button>
    );
};

export default BackButton;

'use client'
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();
    return (
        <button className="btn btn-error" onClick={() => router.back()}>
            뒤로가기
        </button>
    );
};

export default BackButton;

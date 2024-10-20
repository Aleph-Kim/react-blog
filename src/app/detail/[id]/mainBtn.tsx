'use client'
import { useRouter } from 'next/navigation';

const MainButton = () => {
    const router = useRouter();
    return (
        <button className="btn btn-primary" onClick={() => router.push("/")}>
            목록
        </button>
    );
};

export default MainButton;

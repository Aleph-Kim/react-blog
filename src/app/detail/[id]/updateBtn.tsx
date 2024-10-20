import Link from 'next/link';

const MainButton = ({ postId }: { postId: string }) => {
    return (
        <Link
            key={postId}
            href={`/update/${postId}`}
            className="btn btn-warning"
        >
            수정
        </Link>
    );
};

export default MainButton;

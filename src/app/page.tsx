type Post = {
    id: number;
    title: string;
};
const posts: Post[] = [
    { id: 1, title: '1번 게시글' },
    { id: 2, title: '2번 게시글' },
    { id: 3, title: '3번 게시글' },
];

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">게시글 목록</h1>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="rounded-md p-4 cursor-pointer bg-[#303030] transform transition-transform duration-300 hover:-translate-y-2"
                    >
                        <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                    </li>
                ))}
            </ul>
        </div>

    );
}
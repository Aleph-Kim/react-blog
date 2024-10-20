import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export const fetchCache = 'force-no-store'

export default async function Home() {
    const { data: posts } = await supabase
        .from('post')
        .select('*')
        .order('id', { ascending: false });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">게시글 목록</h1>
            <div className="space-y-4">
                {posts?.map((post) => (
                    <Link
                        key={post.id}
                        href={`/detail/${post.id}`}
                        className="block rounded-md p-4 cursor-pointer bg-[#303030] transform transition-transform duration-300 hover:-translate-y-2"
                    >
                        <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
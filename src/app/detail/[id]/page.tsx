'use client'

import { supabase } from "@/lib/supabaseClient";
import { useParams, useRouter } from "next/navigation";

export default async function Layout() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const { data: post } = await supabase
        .from('post')
        .select("*")
        .eq('id', id)
        .single();
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">게시글 상세</h1>
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title text-4xl font-bold">{post.title}</h1>
                    <div className="divider"></div>
                    <div className="prose">
                        <p>{post.content}</p>
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary" onClick={() => {
                            router.back();
                        }}>목록</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

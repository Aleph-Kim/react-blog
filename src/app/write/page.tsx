'use client'
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Write() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { data: post } = await supabase
            .from("post")
            .insert([{
                title: title,
                content: content
            }])
            .select('id')
            .single();

        router.refresh();
        router.push(`/detail/${post?.id}`);
    };

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="title" className="text-2xl p-1">제목</label>
            <input
                id="title"
                name="title"
                type="text"
                className="input input-bordered w-full mt-3 mb-5"
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="content" className="text-2xl p-1">내용</label>
            <textarea
                id="content"
                name="content"
                className="textarea textarea-bordered w-full h-96 resize-none mt-3 mb-5"
                placeholder="내용을 입력해주세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <div className="w-full text-end">
                <button type="submit" className="btn btn-primary">저장</button>
            </div>
        </form>
    )
}

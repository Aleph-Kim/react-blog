'use client'
import { supabase } from "@/lib/supabaseClient"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BackButton from "./backBtn";

interface UpdateProps {
    params: {
        id: string;
    }
}

export default function Update(props: UpdateProps) {
    const router = useRouter();

    const id: string = props.params.id;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            const { data: post } = await supabase
                .from('post')
                .select("*")
                .eq('id', id)
                .single();

            setTitle(post.title);
            setContent(post.content);
        }

        fetchPost();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await supabase
            .from("post")
            .update([{
                title: title,
                content: content
            }])
            .eq('id', id)
            .single();

        router.refresh();
        router.push(`/detail/${id}`);
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

            <div className="card-actions justify-end mt-4">
                <BackButton />
                <button type="submit" className="btn btn-primary">저장</button>
            </div>
        </form>
    )
}

import { supabase } from "@/lib/supabaseClient";
import MainButton from "./mainBtn";
import DeleteButton from "./deleteBtn";

interface DetailProps {
    params: {
        id: string;
    }
}

export default async function Detail(props: DetailProps) {
    const id:string = props.params.id;
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
                        <DeleteButton postId={id} />
                        <MainButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">글 작성</h1>
            {props.children}
        </div>
    );
}

export default function Write() {
    return (
        <form method="POST">
            <label htmlFor="subject" className="text-2xl p-1">제목</label>
            <input id="subject" type="text" className="input input-bordered w-full mt-3 mb-5" placeholder="제목을 입력해주세요" />

            <label htmlFor="body" className="text-2xl p-1">내용</label>
            <textarea id="body" className="textarea textarea-bordered w-full h-96 resize-none mt-3 mb-5" placeholder="내용을 입력해주세요"></textarea>

            <div className="w-full text-end">
                <button type="submit" className="btn btn-primary">저장</button>
            </div>
        </form>
    )
}
import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export function GET(){
    return json(comments);
}

// client가 남기는 content가 requestEvent에 들어가게 됨
export async function POST(requestEvent){
    const { request } = requestEvent;

    // json 포멧을 자바스크립트로 바꾸어 할당했다 라고 생각하면 될듯
    const { text } = await request.json();
    const newComment = {
        id: comments.length+1,
        text
    };
    comments.push(newComment);

    return json(newComment, { status : 201 }); 
    // return new Response(JSON.stringify((newComment), { status : 201 }));
}
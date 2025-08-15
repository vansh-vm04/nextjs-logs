import axios from "axios";

export default async function BlogPost({params}:unknown){
    const blogIds:[] = (await params).blogIds;
    return (
        <div className="flex flex-col">
            Blog Page
            <span>{blogIds.toString()}</span>
        </div>
    )
}
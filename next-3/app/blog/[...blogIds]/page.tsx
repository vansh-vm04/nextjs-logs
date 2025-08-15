import axios from "axios";

export default async function BlogPost({params}:{
  params: Promise<{
    blogIds: string[];
  }>;
}){
    const blogIds:string[] = (await params).blogIds;
    return (
        <div className="flex flex-col">
            Blog Page
            <span>{blogIds.toString()}</span>
        </div>
    )
}
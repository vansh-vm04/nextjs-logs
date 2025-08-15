import axios from "axios";

export default async function BlogPost({params}:unknown){
    const postId = (await params).postId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const blog = response.data;
    return (
        <div className="flex flex-col">
            Blog Page
            <span>{blog.title}</span>
        </div>
    )
}
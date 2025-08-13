import axios from "axios";


async function getBlogs(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    }

export default async function Blogs(){
    const blogs = await getBlogs();
    return <div>
        Learn nextjs from this best website.
        {blogs.map((todo:TodoType,index:number)=>(
            <Todo key={index} title={todo.title} completed={todo.completed}/>
        ))}
    </div>
}

interface TodoType{
    title:string,
    completed:boolean,
}

function Todo(props:TodoType){
    return <div>
        <span>{props.title}</span>
        <span>{props.completed ? 'Done' : 'Not done'}</span>
    </div>
}
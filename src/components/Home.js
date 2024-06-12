import BlogList from "./BlogList";
import useFetch from "../useFetch";
import Message from "./Message";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">
            <Message isPending={isPending} error={error} />
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}
 
export default Home;
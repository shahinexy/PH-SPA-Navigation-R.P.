import toast from "react-hot-toast";
const getLocalStBlog = () =>{
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

// save blogs
const saveLocalStBlogs = blog =>{
    let blogs = getLocalStBlog();
    const isExsit = blogs.find(blog => blog.id === blogs.id);
    if(isExsit){
        return toast.error("Already Bookmarked")
    }
    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('Bookmarked Successfully!')
}

// delete blogs
const deleteLocalStBlogs = id =>{
    let blogs = getLocalStBlog();
    const remaining = blogs.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Delete Successfully!')
}

export { getLocalStBlog, saveLocalStBlogs,deleteLocalStBlogs };
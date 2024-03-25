import { useEffect, useState } from "react";
import { deleteLocalStBlogs, getLocalStBlog } from "../../utility";
import BlogCards from "../BlogCards/BlogCards";

const Bookmark = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBologs = getLocalStBlog();
    setBlogs(storedBologs);
  }, []);

  const handleDelete = (id) => {
    deleteLocalStBlogs(id);
    const storedBologs = getLocalStBlog();
    setBlogs(storedBologs);
  };

  return (
    <div>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-10">
        {blogs.map((blog) => (
          <BlogCards
            key={blog.id}
            blog={blog}
            deletable={true}
            handleDelete={handleDelete}
          ></BlogCards>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;

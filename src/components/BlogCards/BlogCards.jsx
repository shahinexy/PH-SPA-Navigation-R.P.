import { Link } from 'react-router-dom';
import placeholder from '../../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";

const BlogCards = ({blog, deletable, handleDelete}) => {
    const {id, title, description, cover_image, edited_at} = blog;

  return (
    <>
    <div className='relative'>
    <div className=" h-full max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 border-purple-400 hover:scale-105 transition p-2">
      <Link
        to={`/blog/${id}`}
        
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeholder}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">{new Date(edited_at).toLocaleDateString()}</span>
          <p>{description} </p>
        </div>
      </Link>
    </div>
        {
          deletable && <button onClick={() => handleDelete(id)} className='absolute -top-4 -right-2 text-2xl bg-purple-300 text-red-600 rounded-full p-2'><MdDeleteForever></MdDeleteForever></button>
        }
        </div>
    </>
  );
};

export default BlogCards;

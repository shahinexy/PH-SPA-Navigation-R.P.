import { Link } from 'react-router-dom';
import placeholder from '../../assets/404.jpg'
const BlogCards = ({blog}) => {
    const {id, title, description, cover_image, edited_at} = blog;
  return (
    <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 border-purple-400 hover:scale-105 transition p-2">
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
  );
};

export default BlogCards;

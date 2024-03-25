import { useLoaderData } from "react-router-dom";
import placeholder from "../../assets/404.jpg";

import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {
  const blog = useLoaderData();
  const { title, cover_image, edited_at, tags, body_html } = blog;
  return (
    <div className="border border-purple-400 p-5">
      <div className=" group hover:no-underline focus:no-underline dark:bg-gray-50">
        <div className="overflow-hidden">
          <img
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || placeholder}
          />
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
            {tags.map((tag, idx) => (
              <a
                key={idx}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
              >
                #{tag}
              </a>
            ))}
          </div>
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {new Date(edited_at).toLocaleDateString()}
            </span>
            <div>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

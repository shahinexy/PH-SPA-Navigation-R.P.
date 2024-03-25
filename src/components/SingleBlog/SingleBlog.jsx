import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleBlog = () => {
    const blog = useLoaderData()
    const {cover_image, title, created_at, description, reading_time_minutes, readable_publish_date, positive_reactions_count, public_reactions_count, comments_count, user} = blog;
    console.log(blog);

    const [tabIndex, setTabtIndex] = useState(0)
    return (
        <div>
            <div className="">
            <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
		<div className="space-y-6">            
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
				<div className="flex items-center md:space-x-2">
					<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
					<p className="text-sm">{user.name} • July 19th, 2021</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">{reading_time_minutes} min read • {public_reactions_count} views</p>
			</div>
		</div>

        {/* tabs */}
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link onClick={() => setTabtIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
            </Link>
            <Link onClick={() => setTabtIndex(1)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
            </Link>
        </div>

		<div className="dark:text-gray-800">
			<p>{description}</p>
		</div>
	</article>
	<div>
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#MambaUI</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#TailwindCSS</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#Angular</a>
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
				</li>
			</ul>
		</div>
	</div>
</div>
            </div>
        </div>
    );
};

export default SingleBlog;
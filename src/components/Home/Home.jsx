import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex gap-5 justify-center">
                <Link to={'/blog'}><button className="btn bg-purple-600">Read Blogs</button></Link>
                <Link to={'/bookmarks'}><button className="btn bg-purple-600">Bookmarks</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

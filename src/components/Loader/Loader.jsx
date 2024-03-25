import { HashLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <HashLoader size={100} color="purple"></HashLoader>
        </div>
    );
};

export default Loader;
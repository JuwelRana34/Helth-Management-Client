import loading_gif from '../assets/loading.gif';
import { HashLoader } from "react-spinners";
const Loading = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <img src={loading_gif} alt="" />
        </div>
    );
};

export default Loading;
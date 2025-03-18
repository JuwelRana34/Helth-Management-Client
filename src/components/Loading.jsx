import loading_gif from '../assets/loading.gif';
import { HashLoader } from "react-spinners";
const Loading = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
        <HashLoader size={70} color='#1C5CBB'/>
        </div>
    );
};

export default Loading;
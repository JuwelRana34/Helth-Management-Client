import loading_gif from '../assets/loading.gif';

const Loading = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <img src={loading_gif} alt="" />
            <div>problem</div>
        </div>
    );
};

export default Loading;
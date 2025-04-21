import loader from '../assets/animation/VirusDisinfection.gif'
const Loading = () => {
    return (
      <div className="flex flex-col justify-center min-h-screen items-center">
        <img style={{ height: "300px", width: "300px" }} src={loader} alt="" />
        <h1 className=' font-semibold animate-pulse text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-600'>Loading...</h1>
      </div>
    );
};

export default Loading;
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {

    const {gif,loading,fetchData} = useGif();

    function clickHandler(){
        fetchData();
    }


    return (
        <div className="bg-white opacity-85 w-1/2 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random GIFs</h1>
            
            {
                loading ? (<Spinner/>) : 
                (
                    <img 
                        src = {gif}
                        width="450"
                    />
                )
            }

            

            <button className="px-[2rem] py-[0.78rem] mb-[20px] border bg-[#b4161b21] rounded-md font-semibold font-sans text-[18px] border-[#b4161b] hover:bg-[#fa1d0e] hover:text-white"
            onClick={clickHandler}>
                Generate
            </button>

        </div>
    )
}

export default Random;
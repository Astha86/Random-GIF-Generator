import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {

    const [tag, setTag] = useState("");

    const {gif,loading,fetchData} = useGif(tag);

    function clickHandler(){
        fetchData(tag);
    }

    function changeHandler(event){
        setTag(event.target.value);
    }

    return (
        <div className="bg-white opacity-85 w-1/2 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px] mb-[10px]">

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">{tag} GIFs</h1>
            
            {
                loading ? (<Spinner/>) : 
                (
                    <img 
                        src = {gif}
                        width="450"
                    />
                )
            }

            <input
            className="px-[1.5rem] py-[0.70rem] w-1/2 text-white font-sans text-center bg-black rounded-lg border-"
            onChange={changeHandler}
            placeholder="Search here..."
            value={tag}
            />

            <button className="px-[2rem] py-[0.78rem] mb-[20px] border bg-[#b4161b21] rounded-md 
            font-semibold font-sans text-[18px] border-[#b4161b] hover:bg-[#fa1d0e] hover:text-white"
            onClick={clickHandler}>
                Generate
            </button>

        </div>
    )
}

export default Tag;
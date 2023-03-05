import { BiCheck } from "react-icons/bi"

export default function Success({message}){
    return (
        <div className="success container mx-auto">
            <div className="flex justify-center mx-auto border border-rounded border-yellow-400 bg-yellow-400 w-3/6 text-black text-md my-4 py-2 text-center bg-opacity-50">
                {message} <BiCheck size={25} color={"rgb(31,197,94)"}></BiCheck>
            </div>
        </div>
    )
}
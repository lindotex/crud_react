import { BiEdit, BiTrashAlt } from "react-icons/bi"
import data from "@/database/database.json"

export default function Table(){
    return (
        <table className='min-w-full table-auto'>
            <thead>
                <tr className="bg-white">
                    <th className="px-16 py-2">
                        <span className="text-violet-400 hover:text-violet-800">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-violet-400 hover:text-violet-800">Email</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-violet-400 hover:text-violet-800">Salary</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-violet-400 hover:text-violet-800">Birthday</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-violet-400 hover:text-violet-800">Status</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-violet-400 hover:text-violet-800">Actions</span>
                    </th>
                </tr>
            </thead>

            <tbody className="bg-gray-400">
                {
                    data.map((obj, i)=><Tr {...obj} key={i}/>)
                }
            </tbody>

        </table>
    )
};

function Tr({id, name, avatar, email, salary, date, status}) {
    return(
        <tr className="text-center">
                    <td className="px-16 py-2" >
                        <img src={avatar || "#"} alt='' className="rounded-full w-30 h-30"/>
                        <span className="">{name || "Unknow"}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{email || "Unknow"}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{salary || "Unknow"}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{date || "Unknow"}</span>
                    </td>
                    <td className="px-16 py-2">
                        <button className="cursor">
                        <span className="bg-green-500 text-white px-5 py-2 rounded-full text-bold">{status || "Unknow"}</span>
                        </button>
                    </td>
                    <td className="px-16 py-2 flex justify-around gap-1">
                        <button className="cursor px-2 py-2 bg-white rounded-full hover:bg-green-300"><span className=""><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></span></button>
                        <button className="cursor px-2 py-2 bg-white rounded-full hover:bg-red-200"><span className=""><BiTrashAlt size={25} color={"rgb(255,0,0)"}></BiTrashAlt></span></button>                        
                    </td>
                </tr>
    )
};
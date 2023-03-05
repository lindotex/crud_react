import { BiEdit, BiTrashAlt } from "react-icons/bi"

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
                <tr className="text-center">
                    <td className="px-16 py-2">
                        <img src='@' alt=''/>
                        <span className="">Daily Summers</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>dailytituitions@gmail.com</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>U$ 25000,00</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>10-05-2022</span>
                    </td>
                    <td className="px-16 py-2">
                        <button className="cursor">
                        <span className="bg-green-500 text-white px-5 py-2 rounded-full text-bold">Active</span>
                        </button>
                    </td>
                    <td className="px-16 py-2 flex justify-around gap-1">
                        <button className="cursor px-2 py-2 bg-white rounded-full hover:bg-green-300"><span className=""><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></span></button>
                        <button className="cursor px-2 py-2 bg-white rounded-full hover:bg-red-200"><span className=""><BiTrashAlt size={25} color={"rgb(255,0,0)"}></BiTrashAlt></span></button>                        
                    </td>
                </tr>
            </tbody>

        </table>
    )
};
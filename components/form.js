import { Reducer } from "react"
import { useReducer } from "react"
import { BiPlus } from "react-icons/bi"
import Success from "./success"
import Bug from "./bug"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function Form() {

    const [formData, setFormData] = useReducer(formReducer,{})
    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData) == 0) {
            console.log("Don't have any data!")
            return (
                <Bug message={"Data Successfuly Added!"}></Bug>
        )} else {
            console.log(formData)
        }
    }

    if(Object.keys(formData).lenght > 0) return <Success message={"Data Successfuly Added!"}></Success>

    return (
        <form action="" className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input  type='text' onChange={setFormData} name='firstname' placeholder='First Name' className="border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <div className="input-type">
                <input  type='text'onChange={setFormData}  name='lastname' placeholder='Last Name' className="border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <div className="input-type">
                <input  type='e-mail' onChange={setFormData}  name='email' placeholder='e-mail' className="border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <div className="input-type">
                <input  type='currency' onChange={setFormData}  name='salary' placeholder='Salary' className="border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <div className="input-type">
                <input  type='date' onChange={setFormData}  name='date' placeholder='Date' className="border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>

            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type='radio' onChange={setFormData} value="active" id="radioDefault1" name='status'className="form-check input appearance-none rounded-full h-4 w-4 border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"></input>  
                    <label htmlFor="radioDefault1" className="inline-block text-white">Active</label>
                </div>
                <div className="form-check">
                    <input type='radio' onChange={setFormData} value="inactive" id="radioDefault2" name='status'className="form-check input appearance-none rounded-full h-4 w-4 border-gray-300 bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"></input>  
                    <label htmlFor="radioDefault2" className="inline-block text-white">Inactive</label>
                </div>
            </div>

            <button className="flex justify-center text-md w-full text-bold bg-green-500 text-white px-2 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500 hover:text-gray-800">
                Add<span className="px-1"><BiPlus size={24}></BiPlus></span>
            </button>
        </form>
    )
}
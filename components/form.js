import AddUserForm from "./addUserForm"
import UpdateUserForm from "./updateUserForm"

export default function Form() {

    const flag = true;

    return (
        <div className='container mx-auto py-2 px-2'>
            {flag ? <AddUserForm/> : <UpdateUserForm/>}
        </div>
    )
}
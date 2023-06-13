import Swal from "sweetalert2";


const UserRow = ({ user, index }) => {


    // make instructor
    const makeInstructor = () => {
        fetch(`http://localhost:5000/makeInstructor/${user._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is Instructor Now !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else if (data.modifiedCount == 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'info',
                        title: `${user.name} Already is an Instructor !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }


    // make admin
    const makeAdmin = () => {
        fetch(`http://localhost:5000/makeAdmin/${user._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is Admin Now !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else if (data.modifiedCount == 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'info',
                        title: `${user.name} Already is an Admin !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    

    return (
        <tr className='text-gray'>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className={`${user.role === 'admin' && 'text-green-600'} ${user.role === 'instructor' && 'text-light'} capitalize`}>{user.role}</td>
            <td className="space-x-2">
                <button onClick={makeInstructor} className="bg-dark/60 hover:bg-dark hover:border-light border-[1px] border-transparent p-1 rounded-none text-light capitalize">Make Instrustor</button>
                <button onClick={makeAdmin} className="bg-dark2/60 hover:bg-dark2 hover:border-light border-[1px] border-transparent p-1 rounded-none text-light capitalize">Make admin</button>
            </td>
        </tr>
    );
};

export default UserRow;
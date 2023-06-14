import Swal from "sweetalert2";
import useUser from "../../../../hooks/useUser";


const UserRow = ({ user, index }) => {
    // to refech users in useUser hook
    const [, , refech] = useUser();

    // make instructor
    const makeInstructor = () => {
        fetch(`http://localhost:5000/makeInstructor/${user._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refech();
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
                    refech();
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
        <tr className='text-dark dark:text-light'>
            <th className="font-normal">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className={`${user.role === 'admin' && 'text-green-400'} ${user.role === 'instructor' && 'text-blue-400'} capitalize font-semibold`}>{user.role}</td>
            <td className="space-x-2">
                <button onClick={makeInstructor} className="text-light bg-deepDark hover:bg-deepDark/50 p-2">Make Instrustor</button>
                <button onClick={makeAdmin} className="text-light bg-deepDark hover:bg-deepDark/50 p-2">Make Admin</button>
            </td>
        </tr>
    );
};

export default UserRow;
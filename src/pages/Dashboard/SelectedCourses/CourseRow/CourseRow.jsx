import Swal from "sweetalert2";
import useSelected from "../../../../hooks/useSelected";


const CourseRow = ({ course, index }) => {

    // to refetch in useSelected hook
    const [, refetch, ,] = useSelected();


    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(220 38 38)',
            cancelButtonColor: '#636e72',
            confirmButtonText: 'Yes, delete the Course'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedCourses/${course._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'The course has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            }
        })

    }

    return (
        <tr className='text-dark dark:text-light'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.instructorName}</td>
            <td className='space-x-2'>
                <button className='text-light bg-dark dark:bg-light/10 hover:bg-deepDark dark:hover:bg-deepDark px-3 py-1'>Pay</button>
                <button onClick={handleDelete} className='text-light bg-red-600 hover:bg-red-700 px-3 py-1'>⨉</button>
            </td>
        </tr>
    );
};

export default CourseRow;
import Swal from "sweetalert2";

const CourseRow = ({ course, index }) => {

    // approve
    const handleApprove = () => {
        fetch(`http://localhost:5000/approve/${course._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Approved the Course',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else if (data.modifiedCount == 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'info',
                        title: 'Already Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }


    // deny
    const handleDeny = () => {



        Swal.fire({
            title: 'Send Feedback, why you\'ve denied it?',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Deny & send Feedback',
            confirmButtonColor: 'rgb(220 38 38)',
            showLoaderOnConfirm: true,
            preConfirm: (text) => {
                const feedback = { feedback: text };

                // deny request
                fetch(`http://localhost:5000/deny/${course._id}`, {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(feedback)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'The Course has been Denied',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        } else if (data.modifiedCount == 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'info',
                                title: 'Already Denied',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err.message);
                    })

            }

        })

    }

    return (
        <tr className='text-gray'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.courseInstructor}</td>
            <td>{course.courseFee}</td>
            <td className={`${course.status === 'denied' && 'text-red-600'} ${course.status === 'approved' && 'text-blue-600'}`}>{course.status}</td>
            <td className="space-x-2">
                <button onClick={handleApprove} className="bg-blue-700/50 hover:bg-blue-700/80 p-1 rounded-none text-light capitalize">Approve</button>
                <button onClick={handleDeny} className="bg-red-700/50 hover:bg-red-700/80 p-1 rounded-none text-light capitalize">Deny</button>
            </td>

        </tr>
    );
};

export default CourseRow;
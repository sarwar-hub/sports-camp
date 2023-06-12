
const CourseRow = ({ course, index }) => {

    return (
        <tr className='text-gray'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.courseInstructor}</td>
            <td>{course.courseFee}</td>
            <td>{course.status}</td>
            <td className="space-x-2">
                <button className="bg-blue-700 p-1 rounded-none text-light capitalize">Approve</button>
                <button className="bg-red-700 p-1 rounded-none text-light capitalize">Deny</button>
            </td>

        </tr>
    );
};

export default CourseRow;
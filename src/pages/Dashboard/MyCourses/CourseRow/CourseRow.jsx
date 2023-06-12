

const CourseRow = ({course, index}) => {
    return (
        <tr className='text-gray'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.courseFee}</td>
            <td>{course.students}</td>
            <td className='space-x-2'>
                <span className='p-1 rounded-none bg-dark text-gray'>Pending</span>
            </td>
        </tr>
    );
};

export default CourseRow;


const CourseRow = ({course, index}) => {
    return (
        <tr className='text-gray'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.instructorName}</td>
            <td className='space-x-2'>
                <button className='btn btn-sm rounded-none bg-dark text-gray'>Pay</button>
                <button className='btn btn-sm rounded-none bg-red-500 text-white hover:bg-red-600'>⨉</button>
            </td>
        </tr>
    );
};

export default CourseRow;
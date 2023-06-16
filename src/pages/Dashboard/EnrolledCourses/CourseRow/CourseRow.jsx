
const CourseRow = ({ course, index }) => {

    return (
        <tr className='text-dark dark:text-light'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.instructorName}</td>
            <td>{course.courseFee}</td>
            
        </tr>
    );
};

export default CourseRow;
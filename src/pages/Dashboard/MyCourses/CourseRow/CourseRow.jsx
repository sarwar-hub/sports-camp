import { useState } from "react";


const CourseRow = ({course, index}) => {
    const [status, setStatus] = useState(course.status);
    
    return (
        <tr className='text-gray'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.courseFee}</td>
            <td>{course.students}</td>
            <td className='space-x-2'>
                <span className={`
                ${status == 'pending' && 'bg-dark' } 
                ${status == 'approved' && 'bg-blue-700' } 
                ${status == 'denied' && 'bg-red-700' } 
                p-1 rounded-none text-light capitalize`}>
                {status}
                </span>
            </td>
        </tr>
    );
};

export default CourseRow;
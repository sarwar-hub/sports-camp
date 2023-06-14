import { useState } from "react";


const CourseRow = ({course, index}) => {
    const [status, setStatus] = useState(course.status);
    console.log(course.feedback && course.feedback );
    let feedback;
    if(course.feedback.length>20) {
        feedback = course.feedback.slice(0,20) + '...';
    }  else {
        feedback = course.feedback;
    }
    return (
        <tr className='text-dark dark:text-light'>
            <th className="font-normal">{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.courseFee}</td>
            <td>{course.students}</td>
            <td className=''>
                <span className={`
                ${status == 'pending' && 'text-dark' } 
                ${status == 'approved' && 'text-blue-400' } 
                ${status == 'denied' && 'text-red-400' } 
                p-1 rounded-none capitalize font-semibold`}>
                {status}
                </span>
            </td>
            <td>
            {feedback}
            </td>
        </tr>
    );
};

export default CourseRow;
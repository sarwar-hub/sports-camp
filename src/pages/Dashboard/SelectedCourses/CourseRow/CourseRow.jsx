

const CourseRow = ({course, index}) => {


    const handleDelete = () => {
        fetch(`http://localhost:5000/selectedCourses/${course._id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0) {
                alert('deleted')
            }
        })
        .catch(err=>{
            console.log(err.message);
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
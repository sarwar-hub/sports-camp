

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
        <tr className='text-gray'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.instructorName}</td>
            <td className='space-x-2'>
                <button className='btn btn-sm rounded-none bg-dark text-gray'>Pay</button>
                <button onClick={handleDelete} className='btn btn-sm rounded-none bg-red-500 text-white hover:bg-red-600'>⨉</button>
            </td>
        </tr>
    );
};

export default CourseRow;
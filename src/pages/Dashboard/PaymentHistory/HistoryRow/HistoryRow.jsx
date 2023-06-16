
const HistoryRow = ({ course, index }) => {

    return (
        <tr className='text-dark dark:text-light'>
            <th>{index + 1}</th>
            <td>{course.courseName}</td>
            <td>{course.courseFee}</td>
            <td>{course.time}</td>
            <td>{course.trxId}</td>
            
        </tr>
    );
};

export default HistoryRow;
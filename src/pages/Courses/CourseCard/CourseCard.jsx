import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";


const CourseCard = ({ course }) => {

    // current user
    const [, currentUser, ] = useUser();

    // location
    //const location = useLocation();
    const navigate = useNavigate();

    // data from context
    const { user } = useContext(AuthContext);

    // check if the user logged in or not
    const handleSelectCourse = () => {
        if (user) {
            // add selected item into database
            const itemInfo = { courseId: course._id, userEmail: user.email, courseName: course.courseName, instructorName: course.instructorName, courseFee: course.courseFee };
            fetch('https://sports-camp-server-neon.vercel.app/selectedItems', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(itemInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Added to Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
        else {
            Swal.fire({
                title: 'Want to Login Now?',
                text: "Nor you can't add this !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#90caf9',
                cancelButtonColor: '#FF0000',
                confirmButtonText: 'Yes, Go for Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    //return <Navigate to='/login' state={{from: location}} replace></Navigate>
                    navigate('/login');
                }
            })
        }
    }
    return (
        <div className={`${course.availableSeats == 0 ? 'bg-red-500' : 'bg-light dark:bg-dark'} card w-full dark:text-light text-deepDark rounded-none shadow-xl`}>
            <figure><img src={course.thumbnail} alt="course thumb" /></figure>
            <div className="p-5 flex justify-between">
                <div>
                    <h2 className="card-title">{course.courseName}</h2>
                    <p>By {course.instructorName}</p>
                </div>
                <div>
                    <p>Available seat: {course.availableSeats}</p>
                    <p>Course fee: ${course.courseFee}</p>
                </div>
            </div>
            <div>
                <button onClick={handleSelectCourse} className={`
                ${(course.availableSeats == 0 || currentUser.role === 'instructor' || currentUser.role === 'admin')
                    && 'btn-disabled'} w-full py-2 bg-deepLight hover:bg-dark hover:text-light dark:bg-deepDark/50 dark:hover:bg-deepDark/90`}>Select the Course</button>
            </div>
        </div>
    );
};

export default CourseCard;
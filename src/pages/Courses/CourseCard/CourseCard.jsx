import { useContext } from "react";
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";


const CourseCard = ({ course }) => {

    // location
    //const location = useLocation();
    const navigate = useNavigate();

    // data from context
    const { user } = useContext(AuthContext);

    // check if the user logged in or not
    const checkValidity = () => {
        if (user) {
            return;
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
        <div className="card w-full bg-dark text-light rounded-none shadow-xl">
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
                <button onClick={checkValidity} className="w-full py-2 bg-dark2 ">Add to wishlist</button>
            </div>
        </div>
    );
};

export default CourseCard;
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AddCourse = () => {
    // data from context
    const {user} = useContext(AuthContext);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/courses', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'The Course had been Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <SectionTitle>Add New Course</SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="text-dark w-[350px] sm:w-[400px] space-y-3">
                <div className="form-control">
                    <label className="text-sm font-semibold text-deepDark dark:text-light">Course Name</label>
                    <input {...register("courseName")} className="bg-light dark:bg-deepDark dark:text-light w-full outline-none p-1" type="text" name="courseName" placeholder="" required />
                </div>
                <div className="form-control">
                    <label className="text-sm font-semibold text-deepDark dark:text-light">Thumbnail URL</label>
                    <input {...register("thumbnail")} className="bg-light dark:bg-deepDark dark:text-light w-full outline-none p-1" type="url" name="thumbnail" placeholder="" required />
                </div>
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="text-sm font-semibold text-deepDark dark:text-light">Seats</label>
                        <input {...register("seats")} className="bg-light dark:bg-deepDark dark:text-light w-full outline-none p-1" type="number" name="seats" placeholder="0" required />
                    </div>
                    <div className="form-control">
                        <label className="text-sm font-semibold text-deepDark dark:text-light">Course Fee</label>
                        <input {...register("fee")} className="bg-light dark:bg-deepDark dark:text-light w-full outline-none p-1" type="number" name="fee" placeholder="$" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="text-sm font-semibold text-deepDark dark:text-light">Instructor Name</label>
                    <input {...register("instructor")} className="bg-light dark:bg-deepDark dark:text-light w-full outline-none p-1" type="text" name="instructor"  value={user?.displayName} placeholder="" required />
                </div>
                <div className="form-control">
                    <label className="text-sm font-semibold text-deepDark dark:text-light">Instructor Email</label>
                    <input {...register("email")} className="bg-light dark:bg-deepDark dark:text-light w-full outline-none p-1" type="email" name="email" value={user?.email} placeholder="" required />
                </div>
                <div className="flex">
                    <button type="submit" className="border-[1px] dark:text-light hover:bg-dark/30 hover:bg-deepDark border-dark dark:border-light py-1 text-center px-2">Add The Course</button>
                </div>
            </form>
        </div>
    );
};

export default AddCourse;
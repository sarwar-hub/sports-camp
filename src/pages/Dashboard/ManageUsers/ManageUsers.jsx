import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useUser from "../../../hooks/useUser";
import UserRow from "./UserRow/UserRow";

const ManageUsers = () => {
    // selected courses
    const [allUsers, ] = useUser();
    return (
        <div>
            <SectionTitle>Manage Users</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-light">
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((user, index) => <UserRow key={user._id} user={user} index={index}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;
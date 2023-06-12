

const UserRow = ({user, index}) => {
    return (
        <tr className='text-gray'>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className="capitalize">{user.role}</td>
            <td className="space-x-2">
               <button className="bg-dark p-1 rounded-none text-light capitalize">Make Instrustor</button>
               <button className="bg-dark2 p-1 rounded-none text-light capitalize">Make admin</button>
            </td>
        </tr>
    );
};

export default UserRow;
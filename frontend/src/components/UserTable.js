import { useState, useEffect } from "react";
import { adminService } from "../services/admin.service";

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        adminService.getAllUser()
        .then(res => {
            setUsers(res)
        })
        .catch(err => console.log("ERROR: ", err.message))
       }, []);
    
    const HandleUserDelete = (user) => {
        var newUsers = [...users];
        var index = newUsers.indexOf(user);
        newUsers.splice(index, 1);
        setUsers(newUsers);
        //api ở đây comment lại để tránh hậu quả đáng tiếc =>
        adminService.deleteUserById(user._id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <table>
            <tr>
                <th>Ảnh đại diện</th>
                <th>Email</th>
                <th>Hành động</th>
            </tr>

            {users.map((user, index) => {
                if(user.role === "admin") return "";

                return (
                    <tr key={index}>
                        <td>
                            <img src={user.profilePhoto} style={{width: 100}}/>
                        </td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => HandleUserDelete(user)}>Xóa</button>
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}

export default UserTable;
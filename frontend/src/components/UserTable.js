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
                            <button>Xóa</button>
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}

export default UserTable;
import { useState, useEffect } from "react";
import { adminService } from "../services/admin.service";

const CommentTable = () => {
    const [comments, setComments] = useState([]);

    return (
        <table>
            <tr>
                <th>Ảnh đại diện</th>
                <th>Bình luận</th>
                <th>Hành động</th>
            </tr>

            {comments.map((comment, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <img src={comment.profilePhoto} style={{width: 100}}/>
                        </td>
                        <td>{comment.content}</td>
                        <td>
                            <button>Xóa</button>
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}

export default CommentTable;
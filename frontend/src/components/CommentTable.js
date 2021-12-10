import { useState, useEffect } from "react";
import { adminService } from "../services/admin.service";

const CommentTable = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        adminService.getAllComment()
        .then(res => {
            setComments(res)
        })
        .catch(err => console.log("ERROR: ", err.message))
       }, []);

    const HandleCommentDelete = (comment) => {
        var newComments = [...comments];
        var index = newComments.indexOf(comment);
        newComments.splice(index, 1);
        setComments(newComments);
        // api ở đây comment lại để tránh hậu quả đáng tiếc =>
        adminService.deleteCommentById(comment._id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

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
                            <img src={comment.linkAvatar} style={{width: 100}}/>
                        </td>
                        <td>{comment.content}</td>
                        <td>
                            <button onClick={() => HandleCommentDelete(comment)}>Xóa</button>
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}

export default CommentTable;
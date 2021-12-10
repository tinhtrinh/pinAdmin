import { useState } from "react";
import { Link } from "react-router-dom";

import PinTable from "../components/PinTable";
import UserTable from "../components/UserTable";
import CommentTable from "../components/CommentTable";

const Home = () => {
    const [isUserTableOpen, setIsUserTableOpen] = useState(false);
    const [isPinTableOpen, setIsPinTableOpen] = useState(false);
    const [isCommentTableOpen, setIsCommentTableOpen] = useState(false);

    const setOpen = (user, pin, comment) => {
        setIsUserTableOpen(user);
        setIsPinTableOpen(pin);
        setIsCommentTableOpen(comment);
    }

    return (
        <div>
            <Link to="/">Login</Link>

            <h2>Home</h2>
            <button onClick={() => setOpen(true, false, false)}>Quản lý người dùng</button>
            <button onClick={() => setOpen(false, true, false)}>Quản lý bài đăng</button>
            <button onClick={() => setOpen(false, false, true)}>Quản lý bình luận</button>

            {isPinTableOpen ? <PinTable/> : ""}
            {isUserTableOpen ? <UserTable/> : ""}
            {isCommentTableOpen? <CommentTable/>: ""}
        </div>
    );
}

export default Home;
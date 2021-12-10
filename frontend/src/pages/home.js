import { useState } from "react";
import { Link } from "react-router-dom";
import {Nav, Navbar, Container} from 'react-bootstrap';
import PinTable from "../components/PinTable";
import UserTable from "../components/UserTable";
import CommentTable from "../components/CommentTable";
import '../index.css';

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
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                <Link className="navbar-brand" to={"/home"}>Admin</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Logout</Link>
                    </li>
                    </ul>
                </div>
                    <Navbar bg="light" variant="light">
                        <Container>
                        <Nav className="me-auto">
                        <Nav.Link onClick={() => setOpen(true, false, false)} href="#home">Quản lý người dùng</Nav.Link>
                        <Nav.Link onClick={() => setOpen(false, true, false)} href="#features">Quản lý bài đăng</Nav.Link>
                        <Nav.Link onClick={() => setOpen(false, false, true)} href="#pricing">Quản lý bình luận</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </div>
            </nav>

            {isPinTableOpen ? <PinTable/> : ""}
            {isUserTableOpen ? <UserTable/> : ""}
            {isCommentTableOpen? <CommentTable/>: ""}
        </div>
    );
}

export default Home;
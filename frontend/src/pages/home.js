import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Nav, Navbar, Container, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from "react-redux";

import PinTable from "../components/PinTable";
import UserTable from "../components/UserTable";
import CommentTable from "../components/CommentTable";
import '../index.css';

const Home = () => {
    const isLogin = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isUserTableOpen, setIsUserTableOpen] = useState(false);
    const [isPinTableOpen, setIsPinTableOpen] = useState(false);
    const [isCommentTableOpen, setIsCommentTableOpen] = useState(false);

    useEffect(() => {
        if(!isLogin) history.push('/log-in');
    }, [isLogin])

    const setOpen = (user, pin, comment) => {
        setIsUserTableOpen(user);
        setIsPinTableOpen(pin);
        setIsCommentTableOpen(comment);
    }

    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <div>
        <Navbar bg="light" variant="light" className="fixed-top">
            <Container>
                <Link className="navbar-brand" to={"/home"}>Admin</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                       <Button variant="danger" onClick={logOut}>Logout</Button>
                    </li>
                    </ul>
                </div>
                <Nav className="me-auto">
                <Nav.Link onClick={() => setOpen(true, false, false)} href="#user">Quản lý người dùng</Nav.Link>
                <Nav.Link onClick={() => setOpen(false, true, false)} href="#post">Quản lý bài đăng</Nav.Link>
                <Nav.Link onClick={() => setOpen(false, false, true)} href="#comment">Quản lý bình luận</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div style={{padding: "0 20%", marginBottom: '50px'}} className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-light">search</button>
        </div>
        {isPinTableOpen ? <PinTable/> : ""}
        {isUserTableOpen ? <UserTable/> : ""}
        {isCommentTableOpen? <CommentTable/>: ""}
        <h2 style={{color: "white", marginTop: '150px'}}>Vui lòng chọn bảng !</h2>
    </div>
    );
}

export default Home;
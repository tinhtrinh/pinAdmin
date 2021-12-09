import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";

import { authService } from "../services/auth.service";

const LogIn = () => {
    const history=useHistory();
    const { register, handleSubmit } = useForm();
    const [errMessage, setErrMessage] = React.useState('');

    const onSubmit = async (data) => {
        await authService
        .login(data)
        .then((res) => {
            console.log(res)
            history.push('/home');
        })
        .catch((err) => {
          setErrMessage(err.message);
        });
    }
    return (
        <div>
            <Link to="/home">Home</Link>
            <h2>Login</h2>
            <h3>{errMessage}</h3>
            <input placeholder="Tên đăng nhập" {...register('email')}/>
            <input placeholder="Mật khẩu" {...register('password')}/>
            <button onClick={handleSubmit(onSubmit)}>Đăng nhập</button>
        </div>
    );
}

export default LogIn;
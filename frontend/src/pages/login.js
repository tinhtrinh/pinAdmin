import React from "react";
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";

import { authService } from "../services/auth.service";

const LogIn = () => {
    const history=useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await authService
        .login(data)
        .then((res) => {
            console.log(res)
            history.push('/home');
        })
        .catch((err) => {
          console.log(err)
        });
    }
    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Tên đăng nhập" {...register('email')}/>
            <input placeholder="Mật khẩu" {...register('password')}/>
            <button onClick={handleSubmit(onSubmit)}>Đăng nhập</button>
        </div>
    );
}

export default LogIn;
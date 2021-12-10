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
    // return (
    //     <div>
    //         <Link to="/home">Home</Link>
    //         <h2>Login</h2>
    //         <h3>{errMessage}</h3>
    //         <input placeholder="Tên đăng nhập" {...register('email')}/>
    //         <input placeholder="Mật khẩu" {...register('password')}/>
    //         <button onClick={handleSubmit(onSubmit)}>Đăng nhập</button>
    //     </div>
    // );
    return (
        <form>
            <h3>Sign In</h3>

            <div className="form-group" style={{marginBottom: '20px'}}>
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group" style={{marginBottom: '20px'}}>
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group" style={{marginBottom: '20px'}}>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}

export default LogIn;
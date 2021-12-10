import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";

import { authService } from "../services/auth.service";

const LogIn = () => {
    const history=useHistory();
    const { register, handleSubmit } = useForm();
    const [errMessage, setErrMessage] = React.useState('');
    const [submitBtn, setBtn] = useState();

    useEffect(() => {
        setBtn(document.getElementById("subtn"))
      }, []);

    const onSubmit = async (data) => {
        submitBtn.classList.add("disabled");
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
        <form>
            <h3>Sign In</h3>

            <div className="form-group" style={{marginBottom: '20px'}}>
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" {...register('email')}/>
            </div>

            <div className="form-group" style={{marginBottom: '20px'}}>
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" {...register('password')}/>
            </div>

            <h6 style={{color: "red"}}>{errMessage}</h6>

            <div className="form-group" style={{marginBottom: '20px'}}>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button id="subtn" type="submit" className="btn btn-primary btn-block" onClick={handleSubmit(onSubmit)}>Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}

export default LogIn;
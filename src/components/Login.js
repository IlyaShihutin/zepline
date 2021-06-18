
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import User from '../_services/User.service';
import { authHeader } from "../_helpers/auth-header"
const Login = () => {
    const token = useMemo(() => authHeader(), []);

    const loggin = () => {

        if (!token) {
            console.log("token")
            console.log(token)
            User.auth();
        }
        User.get()

    }
    return (
        <div className="login_block">
            <img src={`${process.env.PUBLIC_URL}/img/bear-face.svg`} alt="calendar"></img>
            <button className="login_btn" onClick={() => loggin()}>Let me in</button>
        </div>
    );
}
export default Login;

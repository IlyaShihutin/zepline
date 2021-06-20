
import React from 'react';
import { useDispatch } from 'react-redux';
import User from '../_services/User.service';
import { TABS } from "../_constants/tabConstants";
import { jogsAction } from '../redux/actions/jogsAction';
const Login = ({ setActiveTab }) => {
    const dispatch = useDispatch();
    const loggin = () => {

        if (!localStorage.getItem('userToken')) {
            User.auth();
        }
        dispatch(jogsAction.get());
        setActiveTab(TABS.JOGS);
    }
    return (
        <div className="login_block">
            <img src={`${process.env.PUBLIC_URL}/img/bear_face.svg`} className="mob_invisible" alt="bear_face"></img>
            <img src={`${process.env.PUBLIC_URL}/img/bear_face_pink.svg`} className="mob_visible" alt="bear_face"></img>
            <button className="login_btn" onClick={() => loggin()}>Let me in</button>
        </div>
    );
}
export default Login;

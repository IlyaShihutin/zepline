
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import User from '../_services/User.service';
import { TABS } from "../_constants/tabConstants";
import { jogsAction } from '../redux/actions/jogsAction';
import { authHeader } from "../_helpers/auth-header"
const Login = ({ setActiveTab }) => {
    const dispatch = useDispatch();
    const token = useMemo(() => authHeader(), []);

    const login = async () => {

        if (!token.Authorization) {
            User.auth().then(data => {
                localStorage.setItem("userToken", JSON.stringify(data.response))
                dispatch(jogsAction.get({ 'Authorization': 'Bearer ' + data.response.access_token }))
                setActiveTab(TABS.JOGS);
            })
        } else {
            dispatch(jogsAction.get(token));
            setActiveTab(TABS.JOGS);
        }

    }

    return (
        <div className="login_block">
            <img src={`${process.env.PUBLIC_URL}/img/bear_face.svg`} className="mob_invisible" alt="bear_face"></img>
            <img src={`${process.env.PUBLIC_URL}/img/bear_face_pink.svg`} className="mob_visible" alt="bear_face"></img>
            <button className="login_btn" onClick={() => login()}>Let me in</button>
        </div>
    );
}
export default Login;


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TABS } from "../_constants/tabConstants";
const Login = ({ setActiveTab }) => {

    return (
        <div className="add_block">
            <img src={`${process.env.PUBLIC_URL}/img/cancel.svg`} onClick={() => setActiveTab(TABS.JOGS)} className="cancel_btn" alt="cancel"></img>
            <div className="add_item">
                <p>Distance</p>
                <input></input>
            </div>
            <div className="add_item">
                <p>Time</p>
                <input></input>
            </div>
            <div className="add_item">
                <p>Date</p>
                <input></input>
            </div>
            <button className="save_btn" onClick={() => setActiveTab(TABS.JOGS)}>Save</button>
        </div>
    );
}
export default Login;

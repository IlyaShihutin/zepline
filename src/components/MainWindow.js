import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from "./Header";
import Contact from "./Contact";
import Info from "./Info";
import Jogs from "./Jogs";
import Login from "./Login"
import AddModal from "./AddModal"
import { TABS } from "../_constants/tabConstants";

const MainWindow = () => {
    const [activeTab, setActiveTab] = useState(TABS.LOG)
  

    // function getTokenData() {
    //     return fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: "uuid=hello",
    //     })
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 const tokenData = res.json();
    //                 saveToken(JSON.stringify(tokenData));
    //                 return Promise.resolve()
    //             }
    //             return Promise.reject();
    //         });
    // }
    return (
        <div className="wrapper">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="content">
                {activeTab === TABS.CONTACT && <Contact />}
                {activeTab === TABS.INFO && <Info />}
                {activeTab === TABS.JOGS && <Jogs />}
                {activeTab === TABS.LOG && <Login />}
                {activeTab === TABS.ADD && <AddModal setActiveTab={setActiveTab} />}
            </div>
            {activeTab !== TABS.LOG && <img src={`${process.env.PUBLIC_URL}/img/add.svg`} onClick={() => setActiveTab(TABS.ADD)} className="add_btn" alt="calendar"></img>}
        </div>
    );
}
export default MainWindow;


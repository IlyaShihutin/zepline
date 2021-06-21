import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from "./Header";
import Contact from "./Contact";
import Info from "./Info";
import Jogs from "./Jogs";
import Login from "./Login"
import AddModal from "./AddModal"
import { jogsAction } from '../redux/actions/jogsAction';
import { TABS } from "../_constants/tabConstants";

const MainWindow = () => {
    const [activeTab, setActiveTab] = useState(TABS.LOG)
    const [editModal, setEditModal] = useState()
    const isLoading = useSelector(state => state.jogsReducer.isLoading);
    const error = useSelector(state => state.jogsReducer.error);
    const jogs = useSelector(state => state.jogsReducer.jogs);
    const dispatch = useDispatch();

    const openEditModal = (jog) => {
        setEditModal({ ...jog })
        setActiveTab(TABS.ADD)
    }

    useEffect(() => {
        error && (dispatch(jogsAction.clearError()))
    }, [activeTab])

    return (
        <div className="wrapper">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <p className={error ? "error_text visible" : "error_text"}>{error}</p>
            {!isLoading ? <>
                <div className="content">
                    {activeTab === TABS.CONTACT && <Contact />}
                    {activeTab === TABS.INFO && <Info />}
                    {activeTab === TABS.JOGS && <Jogs setActiveTab={setActiveTab} openEditModal={openEditModal} />}
                    {activeTab === TABS.LOG && <Login setActiveTab={setActiveTab} />}
                    {activeTab === TABS.ADD && <AddModal setActiveTab={setActiveTab} editModal={editModal} setEditModal={setEditModal} />}
                </div>
                {activeTab !== TABS.LOG && jogs.length && activeTab !== TABS.ADD && <img src={`${process.env.PUBLIC_URL}/img/add.svg`} onClick={() => setActiveTab(TABS.ADD)} className="add_btn" alt="add"></img>}
            </>
                : <div></div>
            }

        </div>
    );
}
export default MainWindow;


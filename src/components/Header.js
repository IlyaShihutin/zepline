import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TABS } from "../_constants/tabConstants";
import DataPicker from "./DataPicker"
import { jogsAction } from '../redux/actions/jogsAction';
const Header = ({ activeTab, setActiveTab }) => {
    const [filterActive, setFilterActive] = useState(false)
    const [filterDate, setFilterDate] = useState("");
    const dispatch = useDispatch();

    const onSelectDay = (date, name) => {
        setFilterDate({ ...filterDate, [name]: date });
    }

    useEffect(() => {
        dispatch(jogsAction.filter(filterDate));
    }, [filterDate])

    return (
        <>
            <div className="header">
                <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} className="header_logo" alt="calendar"></img>
                {activeTab !== TABS.LOG &&
                    <div className="header_title">
                        <p onClick={() => setActiveTab(TABS.JOGS)} className={activeTab === TABS.JOGS ? "active" : ""}>JOGS</p>
                        <p onClick={() => setActiveTab(TABS.INFO)} className={activeTab === TABS.INFO ? "active" : ""}>INFO</p>
                        <p onClick={() => setActiveTab(TABS.CONTACT)} className={activeTab === TABS.CONTACT ? "active" : ""}>CONTACT US</p>
                        {!filterActive ? <img src={`${process.env.PUBLIC_URL}/img/filter_close.svg`} onClick={() => setFilterActive(!filterActive)} className="filter_img" alt="calendar"></img>
                            : <img src={`${process.env.PUBLIC_URL}/img/filter_open.svg`} onClick={() => setFilterActive(!filterActive)} className="filter_img" alt="calendar"></img>}
                    </div>
                }
            </div>
            <div className={filterActive ? "filter_block active" : "filter_block"}>
                <DataPicker name="from" title="Date from" selectDay={filterDate.from} setSelectDay={onSelectDay} />
                <DataPicker name="to" title="Date to" selectDay={filterDate.to} setSelectDay={onSelectDay} />
            </div>
        </>
    );
}
export default Header;
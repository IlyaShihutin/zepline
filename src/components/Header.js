import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TABS } from "../_constants/tabConstants";
import {DataPicker} from "./DataPicker"
const Header = ({ activeTab, setActiveTab }) => {
    const [filterActive, setFilterActive] = useState(false)
    const [selectDay, setSelectDay] = useState(new Date());
    console.log(selectDay)
    return (
        <>
            <div className="header">
                <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} className="header_logo" alt="calendar"></img>
                {activeTab !== TABS.LOG &&
                    <div className="header_title">
                        <p onClick={() => setActiveTab(TABS.JOGS)} className={activeTab === TABS.JOGS ? "active" : ""}>JOGS</p>
                        <p onClick={() => setActiveTab(TABS.INFO)} className={activeTab === TABS.INFO ? "active" : ""}>INFO</p>
                        <p onClick={() => setActiveTab(TABS.CONTACT)} className={activeTab === TABS.CONTACT ? "active" : ""}>CONTACT US</p>
                        <img src={`${process.env.PUBLIC_URL}/img/filter_img.svg`} onClick={() => setFilterActive(!filterActive)} className="filter_img" alt="calendar"></img>
                    </div>
                }
            </div>
            <div className={filterActive ? "filter_block active" : "filter_block"}>
            {/* <DataPicker selectDay={selectDay} setSelectDay={setSelectDay} /> */}
            </div>
        </>
    );
}
export default Header;
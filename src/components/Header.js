import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TABS } from "../_constants/tabConstants";
import DataPicker from "./DataPicker"
import { jogsAction } from '../redux/actions/jogsAction';
import Burger from "./Burger"
const Header = ({ activeTab, setActiveTab }) => {
    const [filterActive, setFilterActive] = useState(false)
    const [filterDate, setFilterDate] = useState("");
    const [isOpenBurger, setIsOpenBurger] = useState(false)
    const dispatch = useDispatch();

    const onSelectDay = (date, name) => {
        setFilterDate({ ...filterDate, [name]: date });
    }

    const changeTab = (tab) => {
        isOpenBurger && (setIsOpenBurger(false))
        setActiveTab(tab)
    }

    useEffect(() => {
        dispatch(jogsAction.filter(filterDate));
    }, [filterDate])

    return (
        <>
            <div className={isOpenBurger ? "header open" : "header"} >
                <img src={`${process.env.PUBLIC_URL}/img/${isOpenBurger ? "logo_green" : "logo"}.svg`} className="header_logo" alt="logo"></img>
                {activeTab !== TABS.LOG &&
                    <>
                        <div className="header_title">
                            <p onClick={() => changeTab(TABS.JOGS)} className={activeTab === TABS.JOGS ? "active" : ""}>JOGS</p>
                            <p onClick={() => changeTab(TABS.INFO)} className={activeTab === TABS.INFO ? "active" : ""}>INFO</p>
                            <p onClick={() => changeTab(TABS.CONTACT)} className={activeTab === TABS.CONTACT ? "active" : ""}>CONTACT US</p>
                            {activeTab === TABS.JOGS ? <img src={`${process.env.PUBLIC_URL}/img/${!filterActive ? "filter_close" : "filter_open"}.svg`}
                                onClick={() => setFilterActive(!filterActive)} className="filter_img" alt="filter_img"></img>:<div></div>}
                        </div>
                        <div className="header_title_mob">
                            {activeTab === TABS.JOGS && !isOpenBurger && <img src={`${process.env.PUBLIC_URL}/img/${!filterActive ? "filter_close" : "filter_open"}.svg`}
                                onClick={() => setFilterActive(!filterActive)} className="filter_img" alt="filter_img"></img>}
                            <Burger setIsOpenBurger={setIsOpenBurger} isOpenBurger={isOpenBurger} />

                            {isOpenBurger && <div className="burger_list">
                                <p onClick={() => changeTab(TABS.JOGS)} className={activeTab === TABS.JOGS ? "active" : ""}>JOGS</p>
                                <p onClick={() => changeTab(TABS.INFO)} className={activeTab === TABS.INFO ? "active" : ""}>INFO</p>
                                <p onClick={() => changeTab(TABS.CONTACT)} className={activeTab === TABS.CONTACT ? "active" : ""}>CONTACT US</p>
                            </div>}
                        </div>
                    </>
                }


            </div>
            {activeTab === TABS.JOGS && < div className={filterActive ? "filter_block active" : "filter_block"}>
                <DataPicker name="from" title="Date from" selectDay={filterDate.from} setSelectDay={onSelectDay} />
                <DataPicker name="to" title="Date to" selectDay={filterDate.to} setSelectDay={onSelectDay} />
            </div>}
        </>
    );
}
export default Header;
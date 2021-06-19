
import React, {  useMemo } from 'react';
import {  useSelector } from 'react-redux';
import moment from "moment";
import { TABS } from "../_constants/tabConstants";
import { filterDate } from "../_helpers/filter-date"
const Jogs = ({ setActiveTab, openEditModal }) => {
    const jogs = useSelector(state => state.jogsReducer.jogs);
    const filter = useSelector(state => state.jogsReducer.filter);

    const jogsList = useMemo(() => filter.from || filter.to ? jogs.filter(elem => filterDate(elem.date, ...[filter])) : jogs, [jogs, filter]);
console.log(jogsList)
    return (
        <div className="jogs_block">
            {jogsList.map((elem) => {
                const speed = Math.floor(elem.distance / elem.time * 100) / 100;
                return <div className="jog_item" key={elem.id}>
                    <img src={`${process.env.PUBLIC_URL}/img/run_img.svg`} alt="run"></img>
                    <div className="jog_text">
                        <p className="date">{moment(elem.date).format('DD.MM.YYYY')}</p>
                        <p>Speed:<span>{speed}km/min</span></p>
                        <p>Distance:<span>{elem.distance} km</span></p>
                        <p>Time:<span>{elem.time} min</span></p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/img/add.svg`} onClick={() => openEditModal(elem)} className="edit_btn" alt="add"></img>
                </div>

            }
            )}

            {!jogs.length && <div className="no_item">
                <img src={`${process.env.PUBLIC_URL}/img/sad_smile.svg`} alt="sad_smile"></img>
                <p>Nothing is there </p>
                <button className="create_jog_btn" onClick={() => setActiveTab(TABS.ADD)}>Create your jog first</button>
            </div>
            }
        </div>
    );
}
export default Jogs;

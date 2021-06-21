
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TABS } from "../_constants/tabConstants";
import Input from "./Input/index"
import { jogsAction } from '../redux/actions/jogsAction';
import DataPicker from "./DataPicker"
import moment from "moment";
const Login = ({ setActiveTab, editModal, setEditModal }) => {

    const [jog, setJog] = useState(editModal ? editModal : {});
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const jogs = useSelector(state => state.jogsReducer.jogs);

    const handleChange = (e, nameDate) => {
        error && (setError(false));

        if (nameDate === "date") {
            setJog({ ...jog, [nameDate]: e });
        } else {
            const { name, value } = e.target;
            setJog({ ...jog, [name]: value });
        }
    }

    const closeModal = () => {
        setEditModal({})
        setActiveTab(TABS.JOGS);
    }

    const save = () => {
        if (!jog.distance || !jog.time || !jog.date) {
            setError(true);
        } else {
            const objJog = jog;
            objJog.date = moment(jog.date).format('DD/MM/YYYY')
            const rawData = new URLSearchParams(Object.keys(objJog).map(key => [key, objJog[key]]));
            dispatch(jogsAction.post(rawData.toString()));
            closeModal();
        }

    }
    const edit = () => {
        if (!jog.distance || !jog.time || !jog.date) {
            setError(true);
        } else {
            const objJog = { ...jog };
            objJog.date = moment(jog.date).format('DD/MM/YYYY')
            objJog.jog_id = jog.id;
            const rawData = new URLSearchParams(Object.keys(objJog).map(key => [key, objJog[key]]));

            dispatch(jogsAction.put(rawData.toString(), jogs));
            closeModal();
        }
    }

    return (
        <div className="add_block">
            <img src={`${process.env.PUBLIC_URL}/img/cancel.svg`} onClick={() => closeModal()} className="cancel_btn" alt="cancel"></img>
            <p className={error ? "error_text visible" : "error_text"} > Заполните все поля</p>
            <Input title="Distance" value={jog.distance} name="distance" handleChange={handleChange} />
            <Input title="Time" value={jog.time} name="time" handleChange={handleChange} />
            <DataPicker title="Date" selectDay={Date.parse(jog.date) ? Date.parse(jog.date) : jog.date} name="date" setSelectDay={handleChange} />
            <button className="save_btn" onClick={() => editModal?.id ? edit() : save()}>Save</button>
        </div>
    );
}
export default Login;

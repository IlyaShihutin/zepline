import React, { useMemo } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DataPicker = ({ title, name, selectDay, setSelectDay }) => {
    const minDate = useMemo(() => new Date(1970, 0, 1), []);
    const maxDate = useMemo(() => new Date(), []);
    return (
        <React.Fragment>
            <div className="date_input">
                <p>{title}</p>
                <DatePicker
                    selected={selectDay}
                    type="day"
                    onChange={date => setSelectDay(date, name)}
                    isClearable={false}
                    showMonthDropdown
                    showYearDropdown
                    maxDate={maxDate}
                    minDate={minDate}
                    dropdownMode="select"
                    name={name}
                    autoComplete="off"
                />
            </div>
        </React.Fragment>
    );
}

export default DataPicker;



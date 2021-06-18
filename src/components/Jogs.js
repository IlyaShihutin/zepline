
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
const Jogs = () => {

    return (
        <div className="jogs_block">
            <div className="jog_item">
                <img src={`${process.env.PUBLIC_URL}/img/run_img.svg`} alt="calendar"></img>
                <div className="jog_text">
                    <p className="date">20.12.2017</p>
                    <p>Speed:<span>15</span></p>
                    <p>Distance:<span>10km</span></p>
                    <p>Time:<span>60 min</span></p>
                </div>
            </div>

        </div>
    );
}
export default Jogs;

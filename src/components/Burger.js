import React from 'react';
const Burger = ({ setIsOpenBurger, isOpenBurger }) => {
    return (
        <div className="burger_icon" onClick={() => setIsOpenBurger(!isOpenBurger)}>
            {isOpenBurger ?
                <img src={`${process.env.PUBLIC_URL}/img/cancel_grey.svg`} className="filter_img" alt="calendar"></img>
                : <>
                    <div></div>
                    <div></div>
                    <div></div>
                </>
            }
        </div>
    );
}
export default Burger;


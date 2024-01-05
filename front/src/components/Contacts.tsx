import React from 'react';
import "../styles/contacts.css"
interface Props {
    color:string;
}

const Contacts = ({color}: Props) => {
    return (
            <div className="phone column">
                <p className="phone__number" >+7 (777) 490-00-91</p>
                <p className="phone__time">время работы: 9:00-20:00</p>
                <a href="#" className={`phone__call__${color === "black" ? "black black" : "white white"}`} >Заказать звонок</a>
            </div>
    );
};

export default Contacts;
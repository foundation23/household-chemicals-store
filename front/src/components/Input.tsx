import React from 'react';
import "../styles/input.css"
import SvgSorted from "../assets/svgSorted/svgSorted";

type InputProps = {
    logo?: string;
    text: string;
}

const Input: React.FC<InputProps> = ({logo, text}) => {
    return (
        <form className="search">
            <input className="search__input" placeholder={text} type="text"/>
            <button className="search__input__btn" type="submit">
                <div className="search__input__btn__img">
                    <SvgSorted id="search"/>
                </div>
            </button>
        </form>
    );
};

export default Input;
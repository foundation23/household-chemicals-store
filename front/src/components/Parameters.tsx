import React from 'react';
import "../styles/parameters.css"
import {useAppSelector} from "../hooks/redux";
import Button from "./Button";

const Parameters = () => {
    const {brands} = useAppSelector(state => state.brandReducer)
    const {manufacturers} = useAppSelector(state => state.manufacturerReducer)
    return (
        <div>
            <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
            <div className="parameters__price">
                <p>Цена ₸</p>
                <form className="parameters__price__input">
                    <input type="number" placeholder="0"/>
                    <span className="parameters__price__span">-</span>
                    <input type="number" placeholder="10"/>
                </form>
            </div>
            <div className="parameters">
                <div className="parameters__list manufactures">
                    <h3>Производитель</h3>
                    {manufacturers.map(manufacture => (
                        <label>
                            <input type="checkbox" name="happy" value="yes" /><span
                            className="parameters__name">{manufacture.name}</span>
                        </label>
                    ))}
                    <div className="show-all">
                        <span>Показать все </span>
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65"/>
                        </svg>
                    </div>
                </div>
                <div className="parameters__list">
                    <h3>Бренд</h3>
                    {brands.map(brand => (
                        <label>
                            <input type="checkbox" name="happy" value="yes"/><span
                            className="parameters__name">{brand.name}</span>
                        </label>
                    ))}
                    <div className="show-all">
                        <span>Показать все </span>
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="parameters__button">
                <Button name={"Показать"}/>
                <div className="parameters__button__delete">
                <Button logo={"cartDelete"} color={"white"}/>
                </div>
            </div>
        </div>
    );
};

export default Parameters;
import React from 'react';
import "../styles/header.css"
import ava from "../assets/img/ava.png"
import Button from "./Button";
import Input from "./Input";
import SvgSorted from "../assets/svgSorted/svgSorted";
import Contacts from "./Contacts";
import {CART_ROUTE, CATALOG_ROUTE, HOME_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";

const Header = () => {
    const {amount, quantity} = useAppSelector(state => state.cartReducer)
    return (
        <div className="container">
            <div className="top">
                <div className="connection">
                    <div className="location">
                        <SvgSorted id="location"/>
                        <div className="address">
                            <p className="heading">
                                г. Кокчетав, ул. Ташенова 129Б
                            </p>
                            <p>
                                (Рынок Восточный)
                            </p>
                        </div>
                    </div>
                    <div className="mail">
                        <SvgSorted id="mail"/>
                        <div className="address">
                            <p className="heading">
                                opt.sultan@mail.ru
                            </p>
                            <p>
                                На связи в любое время
                            </p>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <a href="#" className="link"> О компании</a>
                    <a href="#" className="link">Доставка и оплата</a>
                    <a href="#" className="link">Возврат</a>
                    <a href="#" className="link">Контакты</a>
                </div>
            </div>
            <div className="header">
                <Link to={HOME_ROUTE}>
                    <SvgSorted id="logo" />
                </Link>
                <div className="header__catalog">
                    <Link to={CATALOG_ROUTE}>
                        <Button name={"Каталог"} logo='catalog'/>
                    </Link>
                </div>
                <Input text={"Поиск..."} logo='search'/>
                <div className="header__bell">
                    <Contacts color="black"/>
                    <div className="header__bell__ava">
                        <img src={ava} alt="ava" className="ava" />
                    </div>
                </div>
                <div className="header__bell">
                    <Button name={"Прайс-лист"} logo='download'/>
                </div>
                <Link to={CART_ROUTE}>
                    <div className="cart">
                        <SvgSorted id={"cart"} size={"40"} color={"black"} />
                        <div className="cart__number">{quantity}</div>
                        <div className="cart__price">
                            <p className="cart__title">Корзина</p>
                            <p className="cart__price__number">{amount} ₸</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Header;
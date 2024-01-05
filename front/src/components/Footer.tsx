import React from 'react';
import "../styles/footer.css"
import Input from "./Input";
import Button from "./Button";
import whatsAap from "../assets/img/whatsApp.png"
import telegram from "../assets/img/telegram.png"
import visa from "../assets/img/Visa.png"
import masterCard from "../assets/img/MasterCard.png"
import arrow from "../assets/img/arrow.svg"
import Contacts from "./Contacts";
import SvgSorted from "../assets/svgSorted/svgSorted";
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <Link to={HOME_ROUTE}>
                        <SvgSorted id="logo" color="white"/>
                    </Link>
                    <p className="footer__info__text">Компания «Султан» — снабжаем<br/> розничные магазины товарами<br/>
                        "под ключ" в Кокчетаве и Акмолинской<br/> области</p>
                    <p className="footer__info__stocks">Подпишись на скидки и акции</p>
                    <Input text={"Введите ваш E-mail"} logo={arrow}/>
                </div>
                <div className="menu">
                    <h3>Меню сайта:</h3>
                    <div className="column">
                        <a href="#" className="links">О компании</a>
                        <a href="#" className="links">Доставка и оплата</a>
                        <a href="#" className="links">Возврат</a>
                        <a href="#" className="links">Контакты</a>
                    </div>
                </div>
                <div className="categories">
                    <h3>Категории:</h3>
                    <div className="column">
                        <a href="#" className="links">Бытовая химия</a>
                        <a href="#" className="links">Косметика и гигиена</a>
                        <a href="#" className="links">Товары для дома</a>
                        <a href="#" className="links">Товары для детей и мам</a>
                        <a href="#" className="links">Посуда</a>
                    </div>

                </div>
                <div className="price-list">
                    <h3>Скачать прайс-лист:</h3>
                    <div className="button__footer">
                        <Button name={"Прайс-лист"} logo='download'/>
                    </div>
                    <p>Связь в мессенджерах:</p>
                    <div className="social_network">
                        <img src={whatsAap} alt="whatsAap" className="whatsAap"/>
                        <img src={telegram} alt="telegram"/>
                    </div>
                </div>
                <div className="contacts">
                    <h3>Контакты:</h3>
                    <Contacts color="white"/>
                    <div className="cards">
                        <img src={visa} alt="visa" className="whatsAap"/>
                        <img src={masterCard} alt="masterCard"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
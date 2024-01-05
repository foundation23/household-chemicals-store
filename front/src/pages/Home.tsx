import React from 'react';
import "../styles/home.css"
import Button from "../components/Button";
import { Link } from "react-router-dom";
import {CATALOG_ROUTE} from "../utils/consts";

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="banner container">
                <h1>Бытовая химия,<br/>
                    косметика<br/>
                    и хозтовары
                </h1>
                <h2>
                    оптом по кокчетаву и области
                </h2>
                <Link to={CATALOG_ROUTE}>
                    <Button name={"В КАТАЛОГ"}/>
                </Link>

            </div>
        </div>
    );
};

export default Home;
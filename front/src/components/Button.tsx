import React from 'react';
import SvgSorted from "../assets/svgSorted/svgSorted";
import {IProduct} from "../types/IPoduct";
import "../styles/button.css"

type ButtonProps = {
    logo?: string;
    name?: string;
    size?: string;
    color?: string;
    addProduct?: any;
    product?: IProduct;

}

const Button: React.FC<ButtonProps> = ({logo, name, size, color, addProduct, product}) => {

    function showImg(logo: string | undefined, size: string | undefined, color: string | undefined) {
        if (logo) {
            return <SvgSorted id={logo} size={size} color={color}/>
        }
    }

    return (
        <button className="button" onClick={() => product ? addProduct(product) : ''}>
            <span className="button__span">
            {name === "Прайс-лист" ? <a href="../assets/info.json"></a> : ''}
            {name}
            </span>
            {showImg(logo, size, color)}
        </button>
    );
};

export default Button;
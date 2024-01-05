import React from 'react';
import "../styles/card.css"
import Button from "./Button";
import {IProduct} from "../types/IPoduct";
import {PRODUCT_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom"
import SvgSorted from "../assets/svgSorted/svgSorted";
import {addProduct} from "../store/reducers/CartSlice";
import {useDispatch} from "react-redux";

interface ProductProps {
    product: IProduct;
}

const Card: React.FC<ProductProps> = ({product}) => {
    let dispatch = useDispatch()

    function checkSizeType(size_type: any) {
        if (size_type === "объем") {
            return <SvgSorted id="bottle"/>
        } else {
            return <SvgSorted id="box"/>
        }
    }

    const addProductCart = (product: IProduct) => {
        dispatch(addProduct(product))
    }

    return (
        <div className="card">
            <div className="card__img">
                <img src={'http://localhost:5000/' + product.img} alt="product"/>

            </div>
            <div className="card__type">
                {checkSizeType(product.size_type)}
                <span>{product.size}</span>
            </div>
            <Link className="card__name" to={PRODUCT_ROUTE + '/' + product.barcode}>
                {product.name}
            </Link>
            <div className="card__barcode">
                Штрихкод: <span>{product.barcode}</span>
            </div>
            <div className="card__manufacturer">
                Производитель: <span> {product.manufacturer}</span>
            </div>
            <div className="card__brand">
                Бренд: <span> {product.brand}</span>
            </div>
            <div className="card__buy">
                <span className="card__price">{product.price} ₸</span>
                <Button name={"В КОРЗИНУ"} logo='cart' color="white" size="23" addProduct={addProductCart} product={product}/>
            </div>
        </div>

    );
};

export default Card;
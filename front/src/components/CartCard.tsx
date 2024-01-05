import React from 'react';
import {IProduct} from "../types/IPoduct";
import "../styles/cart-card.css"
import {Link} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";
import SvgSorted from "../assets/svgSorted/svgSorted";
import {useDispatch} from "react-redux";
import {addProduct, deleteOneProduct} from "../store/reducers/CartSlice";
import {deleteProducts} from "../store/reducers/CartSlice";

interface ProductProps {
    product: IProduct;
}

const CartCard: React.FC<ProductProps> = ({product}) => {
    let dispatch = useDispatch()

    function checkSizeType(size_type: any) {
        if (size_type === "объем") {
            return <SvgSorted id="bottle"/>
        } else {
            return <SvgSorted id="box"/>
        }
    }

    return (
        <div className="cart-card">
            <div className="cart-card__img">
                <img src={product.img} alt="product"/>
            </div>
            <div className="cart-card__wrapper">
                <div className="cart-card__info">
                    <div className="cart-card__info__type">
                        {checkSizeType(product.size_type)}
                        <span>{product.size}</span>
                    </div>
                    <Link className="cart-card__info__name" to={PRODUCT_ROUTE + '/' + product.barcode}>
                        <p>
                            {product.name}
                        </p>
                    </Link>
                    <div className="cart-card__info__description">
                        {product.description}
                    </div>
                </div>
            </div>
            <div className="border__dashed"></div>
            <form className="cart-card__quantity">
                <button className="cart-card__quantity__button" type='button' onClick={() => dispatch(deleteOneProduct(product.barcode))}>-</button>
                <span className="cart-card__quantity__span">{product.count}</span>
                <button className="cart-card__quantity__button" type='button' onClick={() => dispatch(addProduct(product))}>+</button>
            </form>
            <div className="border__dashed"></div>
            <div className="card__info__buy">
                <span className="card__info__price">{product.price} ₸</span>
            </div>
            <div className="border__dashed"></div>
            <div className="cart-card__delete">
                <button className="cart-card__delete__button" type='button' onClick={() => dispatch(deleteProducts(product.barcode))}><SvgSorted id="cartDelete"/></button>
            </div>
        </div>
    );
};

export default CartCard;
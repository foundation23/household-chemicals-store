import React from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from "../hooks/redux";
import {IProduct} from "../types/IPoduct";
import "../styles/product-card.css";
import Button from "../components/Button";
import SvgSorted from "../assets/svgSorted/svgSorted";
import {addProduct} from "../store/reducers/CartSlice";
import {useDispatch} from "react-redux";


const ProductCard: React.FC<IProduct> = () => {
    let dispatch = useDispatch()
    const {id} = useParams()
    const {products} = useAppSelector(state => state.productReducer)

    const product: any = products.find(d => d.barcode === Number(id))

    function checkSizeType(size_type: string) {
        if (size_type === "объем") {
            return <SvgSorted id="bottle"/>
        } else {
            return <SvgSorted id="box"/>
        }
    }
    const addProductCart = (product: IProduct) => {
        dispatch(addProduct(product))
        console.log(product)
    }

    return (
        <div className="productCard container">
            <div className="productCard__img">
                <img src={product.img} alt="product"/>
            </div>
            <div className="productCard__info">
                <h2>{product.name}</h2>
                <div className="productCard__info__type">
                    {checkSizeType(product.size_type)}
                    <span>{product.size}</span>
                </div>
                <div className="productCard__info__buy">
                    <span>{product.price} ₸</span>
                    <form className="productCard__input">
                        <button>
                            <span className="productCard__button__span">-</span>
                        </button>
                        <span className="productCard__span">1</span>
                        <button>
                            <span className="productCard__button__span">+</span>
                        </button>
                    </form>
                    <div className="productCard__cart">
                        <Button name={"В корзину"} logo="cart" size="23" color="white" addProduct={addProductCart} product={product}/>
                    </div>
                </div>
                <div className="productCard__block-btn">
                    <a href="#" className="productCard__block-btn__share"><SvgSorted id="share"/></a>
                    <a href="#" className="productCard__block-btn__stock">При покупке от 10 000 ₸
                        бесплатная<br/> доставка по Кокчетаву и области
                    </a>
                    <a href="#" className="productCard__block-btn__download">Прайс-лист<SvgSorted id="download"
                                                                                                  color="#3F4E65"/></a>
                </div>
                <div className="productCard__info__block-info">
                    <h3>Описание:</h3>
                   <p>{product.description}</p>
                    <div className="productCard__info__block-info__line"></div>
                    <h3>Характеристики:</h3>
                    <ul>
                        <li>Назначение: <span>{product.type_of_care}</span></li>
                        <li>Производитель: <span>{product.manufacturer}</span></li>
                        <li>Бренд: <span>{product.brand}</span></li>
                        <li>Штрихкод: <span>{product.barcode}</span></li>
                        <li>Вес/Объем: <span>{product.size}</span></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;
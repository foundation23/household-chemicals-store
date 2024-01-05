import React from 'react';
import "../styles/catalog.css"
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Parameters from "../components/Parameters";
import Products from "../components/Products";
import {getBrands} from "../store/Api/BrandApi";
import {getManufacturers} from "../store/Api/ManufacturerApi";
import {getCategory} from "../store/Api/CategoryApi";
import {getProducts} from "../store/Api/ProductApi";

const Catalog: React.FC = () => {
    const {products} = useAppSelector(state => state.productReducer)
    const {categoryId, categories} = useAppSelector(state => state.categoryReducer);
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(getProducts())
        dispatch(getBrands())
        dispatch(getManufacturers())
        dispatch(getCategory())
    }, [dispatch]);

    return (
        <main className="container">
            <div className="catalog__top">
                <h1>Косметика и гигиена</h1>
                <div className="catalog__sort">
                    <p className="catalog__top__sort">
                        Сортировка:
                    </p>
                    <Sort/>
                </div>
            </div>
            <div className="catalog">
                <div className="catalog__filters">
                    <Categories categoryId={categoryId} categories={categories}/>
                </div>
                <div className="nav-bar">
                    < Parameters/>
                </div>
                <Products products={products}/>
            </div>

        </main>
    );
}

export default Catalog;
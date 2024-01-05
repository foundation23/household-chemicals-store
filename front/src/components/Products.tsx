import React, {useState} from 'react';
import Card from "./Card";
import {IProduct} from "../types/IPoduct";

interface ProductsProps {
    products: IProduct[];
}

const Products: React.FC<ProductsProps> = ({products}) => {

    return (
        <div className="list">
            {products.map(product => (
                <Card key={product.barcode} product={product}/>
            ))}
        </div>
    );
};

export default Products;
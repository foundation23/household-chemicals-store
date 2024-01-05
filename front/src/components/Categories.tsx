import React from 'react';
import "../styles/categories.css"
import {useAppDispatch} from "../hooks/redux";
import {setCategoryId} from "../store/reducers/CategorySlice";
import {setProducts} from "../store/reducers/ProductSlice";
import {ICategory} from "../types/ICategory";

interface CategoriesProps {
    categoryId: number;
    categories: ICategory[];
}

const Categories: React.FC<CategoriesProps> = ({categoryId, categories}) => {

    const dispatch = useAppDispatch();
    let selected = () => {
        select = !select
    }
    let select = false

    React.useEffect(() => {
    }, []);
    let dispatchEl = (id: number, name: string) => {
            dispatch(setCategoryId(id))
            dispatch(setProducts(name))
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((category) => (
                    <li key={category.id}
                        onClick={() => dispatchEl(category.id, category.name)
                        }
                        className={(category.id === categoryId) ? "active" : ""}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Categories;
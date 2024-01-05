import React from 'react';

type CategoryUnitProps = {
    name: string;
    id: number;
}

const CategoryUnit: React.FC<CategoryUnitProps> = ({name,id}) => {

    return (
        <div>
            <h3>{name}</h3>
            <div className="parameters__list">
                <label>
                    <input type="checkbox" name="happy" value="yes"/><span
                    className="parameters__name">
                    asfsafsaf{id}</span>
                </label>
            </div>
        </div>
    );
};

export default CategoryUnit;
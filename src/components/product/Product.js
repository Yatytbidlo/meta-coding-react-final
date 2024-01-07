import React from 'react';

const Product = (props) => {
    const {product, onAdd} = props
    return (
        <div>
            <img src={product.img} alt={product.name}/>
            <h3 className={"productName"}>{product.name}</h3>
            <button onClick={() => onAdd(product)}>Добавить<br/>{product.price}$</button>
        </div>
    );
};

export default Product;
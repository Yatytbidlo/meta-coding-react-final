import React from 'react';
import Product from "../product/Product";

const Products = (props) => {
    const {products, onAdd} = props;
    return (
        <main className={"block"}>
        <div className={"row space-evenly"}>
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}/>
            ))}
        </div>
        </main>
    );
};

export default Products;
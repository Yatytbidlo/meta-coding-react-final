import React from 'react';

const Basket = (props) => {
    const {cardItems, onAdd, onRemove} = props
    const itemPrice = cardItems.reduce((a, c) => a+c.qty * c.price, 0)
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    return (
        <div className={"block"}>
            <h2>Корзина</h2>
            {cardItems.length === 0 && <div>Корзина пуста</div>}

            {cardItems.map((item) => (
                <div key={item.id} className={"row"}>
                    <div className={"col-2"}>{item.name}</div>
                    <div className={"col-2"}>
                        <button onClick={() => onRemove(item)} className={"remove"}>-</button>
                        <button onClick={() => onAdd(item)} className={"add"}>+</button>
                     </div>
                    <div className={"col-2 text-right"}>
                        {item.qty} x {itemPrice.toFixed(1)}
                    </div>
                </div>
            ))}

            {cardItems.length !== 0 &&
                <>
                    <hr/>
                    <div className={"row"}>
                        <div className={"col-2"}>
                            Цена товара
                        </div>
                        <div className={"col-1 text-right"}>
                            ${itemPrice.toFixed(1)}
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-2"}>
                            Налоги
                        </div>
                        <div className={"col-1 text-right"}>
                            ${taxPrice.toFixed(1)}
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-2"}>
                            Доставка
                        </div>
                        <div className={"col-1 text-right"}>
                            ${shippingPrice.toFixed(1)}
                        </div>
                    </div>

                    <div className={"row"}>
                        <strong className={"col-2"}>
                            Итоговая сумма
                        </strong>
                        <strong className={"col-1 text-right"}>
                            ${totalPrice.toFixed(0)}
                        </strong>
                    </div>

                    <button onClick={() => alert(`Вы приобрели товар на сумму ${totalPrice} $`)}>Купить</button>
                </>
            }
        </div>
    );
};

export default Basket;
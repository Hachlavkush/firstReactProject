import React from 'React' ;

function cartItem(props) {
    return(
        <div className='cart-item'>
            <img src={`./static/product/${props.sku}_258745.jpg`} alt='' width='80' />
            <div className="cart-item-details">
                <p className="cart-item-name">
                   {props.tittle}
                </p>
                <p> {props.availableSizes[0]} | {props.style}</p>
                <p>Quantity: {props.quantity}</p>
            </div>
            <div className='cart-price'>
                <p onClick={() => props.deleteItems(props.id)} className='cart-cross'>x</p>
                <p className='price'>{`${props.currencyFormat}`}</p>
                <div>
                    <Increment incrementQuantity= {() => props.incrementQuantity(props.id)}/>
                    <Decrement decrementQuantity= {() => props.decrementQuantity(props.id)}/>
                </div>
            </div>
        </div>
    );
}

function Increment(props) {
    return(
        <svg
        xmlns = 'http://www.w3.org/2000/svg'
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="plus-icon">
            onClick={props.incrementQuantity}
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d= "M12 6vm0 0v6m0-6h6m-6 0H6"
            />
        </svg>
    );
}

function decrement(props) {
    return(
        <svg
        xmlns = 'http://www.w3.org/2000/svg'
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="plus-icon">
            onClick={props.decrementQuantity}

            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d= "M12 6vm0 0v6m0-6h6m-6 0H6"
            />
        </svg>
    );
}

export default cartItem;
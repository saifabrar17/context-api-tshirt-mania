import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Selected item: {cart.length}</h3>
           {
               cart.map(tshirt => <p>
                   
                   {tshirt.name}
                   <button onClick={()=> handleRemoveFromCart(tshirt)}>X</button>
                   </p>)
           }
        </div>
    );
};

export default Cart;
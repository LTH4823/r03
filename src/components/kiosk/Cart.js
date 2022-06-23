import React from 'react';
import styled from "styled-components";
const CartDiv = styled.div`
  width: 30vw;
  height: 80vh;
  background-color: coral;
`

const Cart = ({cartItem}) => {



    return (
        <CartDiv>
            <h2>Cart</h2>
            <ul>
                {cartItem.map((item,i) => <li key={i}>{item.pname}---{item.price}</li>)}
            </ul>
        </CartDiv>
    );
};

export default Cart;
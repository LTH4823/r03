import React, {useState} from 'react';
import styled from "styled-components";
import ProductList from "./ProductList";
import Cart from "./Cart";

const KioskDiv = styled.div`
  display: flex;
`

const Kiosk = () => {

    const [cartItem, setCartItem] = useState([])

    const addCart = (product) => {

        setCartItem([...cartItem, product])
    }

    return (
        <KioskDiv>
            <ProductList addCart={addCart}></ProductList>
            <Cart cartItem={cartItem}></Cart>
        </KioskDiv>
    );
};

export default Kiosk;
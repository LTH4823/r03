import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";

const ProductDiv = styled.div`
  width: 70vw;
  background-color: aqua;
`

const ProductUL = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`


const ProduecImg = styled.img`
  width: 100px;
`

const ProduecLi = styled.div`
width: 150px;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  margin: 10px;
  border-radius: 10px;
`



const ProductList = ({addCart}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost/products").then(res => {
            setProducts(res.data)
        })
    }, [])

    const list = products.map(p => <ProduecLi key={p.id}><ProduecImg src={require(`../../assets/img/${p.id}.jpg`)} alt=""/>
        <h5 onClick={() => clickAdd(p)}>{p.pname}</h5>
        <h5>{p.price}</h5>

    </ProduecLi>)

    const clickAdd = (p)=> {
        console.log(p)
        addCart(p)
    }

    return (
        <ProductDiv>
            <h2>Product List</h2>
            <ProductUL>
                {list}
            </ProductUL>
        </ProductDiv>
    );
};

export default ProductList;
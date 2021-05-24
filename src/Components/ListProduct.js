import React from "react";
import {Product} from "./Product";
import styled from 'styled-components';

export const ListProduct = ({products, changeProduct, removeProduct}) => {

  return (
    <Catalog>
      <h2>Product catalog</h2>
      <List>
        { products.map((product, index) => <Product product={product} key={product.id} index={index} changeProduct={changeProduct} removeProduct={removeProduct}/>
        )}        
      </List>
    </Catalog>
  )
};

const Catalog = styled.div`
  margin-top: 40px;
  border:1px solid pink;
  border-radius: 40px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const List = styled.div`
margin-bottom: 50px;
width: 90%;
`

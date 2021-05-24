import React, {useState} from "react";
import styled from 'styled-components';


export const AddNewProduct = ({
  addProduct,
  dataChangeProduct,
}) => {
  const [title, setTitle] = useState(dataChangeProduct.title);
  const [weight, setWeight] = useState(dataChangeProduct.weight);
  const [price, setPrice] = useState(dataChangeProduct.price);
  const [typeProduct, setTypeProduct] = useState(dataChangeProduct.typeProduct);

  return ( 
    <AddProduct>
    <
    Box type = "text"
    defaultValue = {
      dataChangeProduct.title
    }
    onChange = {
      ({
        target: {
          value
        }
      }) => setTitle(value)
    }
    /> <
    Box type = "text"
    defaultValue = {
      dataChangeProduct.weight
    }
    onChange = {
      ({
        target: {
          value
        }
      }) => setWeight(value)
    }
    /> <
    Box type = "text"
    defaultValue = {
      dataChangeProduct.price
    }
    onChange = {
      ({
        target: {
          value
        }
      }) => setPrice(value)
    }
    /> <
    Box type = "text"
    defaultValue = {
      dataChangeProduct.typeProduct
    }
    onChange = {
      ({
        target: {
          value
        }
      }) => setTypeProduct(value)
    }
    /> 
    <AddClick type = "submit"
    onClick = {
      () =>
      addProduct({
        title: title,
        weight: weight,
        price: price,
        typeProduct: typeProduct,
      })
    } >
    Add product 
    </AddClick> 
    </AddProduct>
  );
};

const AddProduct = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
`
const Box= styled.input `
width: 20%;
margin: 10px 0;
padding: 10px;
`
const AddClick = styled.button `
width:25%;
margin: 10px;
padding:10px;
`
import React, {useState} from "react";
import styled from 'styled-components';

export const Product = ({
  product,
  index,
  removeProduct,
  changeProduct
}) => {
  const [title, setTitle] = useState(product.title);
  const [weight, setWeight] = useState(product.weight);
  const [price, setPrice] = useState(product.price);
  const [typeProduct, setTypeProduct] = useState(product.typeProduct);
  
  return (
    <Row>
      <Index>{index + 1}
      </Index>
      <Column
        type="text"
        defaultValue={title}
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <Column
        type="text"
        defaultValue={weight}
        onChange={({ target: { value } }) => setWeight(value)}
      />
      <Column
        type="text"
        defaultValue={price}
        onChange={({ target: { value } }) => setPrice(value)}
      />
      <Column
        type="text"
        defaultValue={typeProduct}
        onChange={({ target: { value } }) => setTypeProduct(value)}
      />
        <Click onClick={() =>
          changeProduct({
            id: product.id,
            title: title,
            weight: weight,
            price: price,
            typeProduct: typeProduct,
          })
        }>
          &#128393;
        </Click>
        <Click onClick={() => removeProduct(product.id)}>
          &times;
        </Click>
    </Row>
  );
};

const Row = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0 auto;
align-items: center;
border-bottom: 2px solid darkgray;
padding: 0;
`
const Index = styled.li`
text-align: center;
width: 20%;
padding: 20px;
padding-left: 20px
`
const Column = styled.input`
border: 0;
width: 90%;
padding: 10px;
`
const Click = styled.button`
border-radius:50%;
border: none;
color: white;
width: 30px;
height: 30px;
padding: 10px;
margin: 5px;
display: flex;
align-items: center;
&:nth-child(6) {
  background-color: green;
};
&:last-child {
  background-color: red;
};
`

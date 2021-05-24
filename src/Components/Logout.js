import React, { useState } from 'react'
import { logoutUserAction, selectUser} from '../features/userReducer'
import {useDispatch, useSelector} from 'react-redux'
import { ListProduct } from "./ListProduct";
import { AddNewProduct } from "./AddNewProduct";
// import styled from 'styled-components';
import './Logout.css'


const dataProductInit = {
    id: null,
    title: null,
    weight: null,
    price: null,
    typeProduct: null,
  };

export const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const products = useSelector(state => state.products);
    const [idChangeProduct, setIdChangeProduct] = useState(null);

    const removeProduct = (id) => dispatch({ type: "removeProduct", id });
    const changeProduct = (payload) => dispatch({ type: "changeProduct", payload });

    const filterDataProductById = products.filter((x) => x.id === idChangeProduct)[0];
    const dataChangeProduct = filterDataProductById ? filterDataProductById : dataProductInit;

    

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logoutUserAction())
    }


    return (
        <div className='logout'>
            <h1>Welcome, {user.name}!</h1>
            <button className="logout_btn"
             onClick={(e) => handleLogout(e)}>Logout</button> 
            {products.length ? (
            <ListProduct
                products={products}
                removeProduct={removeProduct}
                setIdChangeProduct={setIdChangeProduct}
                changeProduct={changeProduct}
            />
           ) : (
                <p>No products</p>
            )}
            <AddNewProduct
                   dataChangeProduct={dataChangeProduct}
                   addProduct={(payload) => dispatch({ type: "addNewProduct", payload })}
                   changeProduct={changeProduct}
                   idChangeProduct={idChangeProduct}
            />
        </div>
    )
}
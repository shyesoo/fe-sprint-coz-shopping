import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import axios from "axios";

// import { useSelector, useDispatch, Provider } from "react-redux";
// import { getProducts } from "../actions/action";
// import { productReducer } from "../reducers/productReducer";

import getProducts from "../apis/api"

import Product from "../components/Product";
import { dummyData } from "../static/dummyData";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 70px;
    padding-right: 70px;
`
const Title = styled.h2`
    margin-top: 30px;
    margin-left: 12px;
`

const ProductList = styled.div`
    display: grid;
    grid-gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Main = ({products, notify}) => {
    const bookmarkList = JSON.parse(localStorage.getItem('bookmarks'));

    return (
        <MainContainer>
            <Title>상품 리스트</Title>
            <ProductList>
                {products.slice(0,4).map((product) => {
                    return ( <Product key={product.id} product={product} notify={notify}/>)
                })}
            </ProductList>
            <Title>북마크 리스트</Title>
            <ProductList>
                {bookmarkList.slice(0,4).map((product) => (
                    <Product key={product.id} product={product} notify={notify}/>
                ))}
            </ProductList>
        </MainContainer>
    )
}

export default Main;
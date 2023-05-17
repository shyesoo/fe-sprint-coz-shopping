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
    margin-top: 50px;
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



const Main = ({products}) => {

    return (
        <MainContainer>
            <Title>상품 리스트</Title>
            <ProductList>
                {products.slice(0,4).map((product) => {
                    return ( <Product key={product.id} product={product}/>)
                })}
            </ProductList>
            <Title>북마크 리스트</Title>
            <ProductList>
                {products.slice(0,4).map((product) => {
                        return ( <Product product={product}/>)
                    })}
            </ProductList>
        </MainContainer>
    )
}

export default Main;
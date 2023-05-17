import React, {useState} from "react";
import styled from "styled-components";

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
    display: flex;

`

const BookmarkList = styled.div`
    display: flex;
`

const Main = () => {
  return (
    <MainContainer>
        <Title>상품 리스트</Title>
        <ProductList>
            {dummyData.map((product) => {
                return ( <Product product={product}/>)
            })}
        </ProductList>
        <Title>북마크 리스트</Title>
        <BookmarkList>
            {dummyData.map((product) => {
                    return ( <Product product={product}/>)
                })}
        </BookmarkList>
    </MainContainer>
  )
}

export default Main;
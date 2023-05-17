import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Product from "../components/Product";

import img_all from "../img/typeImg_all.svg"
import img_brand from "../img/typeImg_brand.svg"
import img_category from "../img/typeImg_category.svg"
import img_exhibition from "../img/typeImg_exhibition.svg"
import img_product from "../img/typeImg_product.svg"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const TypeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
    margin-top: 30px;
`
const Type = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin: 5px;
    color: ${({ active }) => (active ? '#412DD4' : 'black')};
    font-weight: ${({ active }) => (active ? '700' : '400')};
    text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
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
`;

const categories = ['all', 'product', 'category', 'exhibition', 'brand'];

const Bookmarks = ({products}) => {
  const [ selected, setSelected ] = useState('all')
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);
  
  const bookmarkList = JSON.parse(localStorage.getItem('bookmarks'));

  const handleCategoryClick = (category) => {
      setSelected(category);
  }

  const filteredProducts = bookmarkList.filter((product) => {
      if (selected === "all") {
        return true;
      }
      return product.type.toLowerCase() === selected.toLowerCase(); // 대소문자 구분 없이 필터링
    });

  return (
    <Main>
        <TypeContainer>
            <Type onClick={() => handleCategoryClick('all')}>
                <img src={img_all}></img>
                <Text active={selected === 'all'}>전체</Text>
            </Type>
            <Type onClick={() => handleCategoryClick('product')}>
                <img src={img_product}></img>
                <Text active={selected === 'product'}>상품</Text>
            </Type>
            <Type onClick={() => handleCategoryClick('category')}>
                <img src={img_category}></img>
                <Text active={selected === 'category'}>카테고리</Text>
            </Type>
            <Type onClick={() => handleCategoryClick('exhibition')}>
                <img src={img_exhibition}></img>
                <Text active={selected === 'exhibition'}>기획전</Text>
            </Type>
            <Type onClick={() => handleCategoryClick('brand')}>
                <img src={img_brand}></img>
                <Text active={selected === 'brand'}>브랜드</Text>
            </Type>
        </TypeContainer>
        <ProductList>
            {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <Product key={product.id} product={product}/>
            ))
            ) : (
            <Text>해당 카테고리에 상품이 없습니다.</Text>
            )}
        </ProductList>
    </Main>
    
  )
}

export default Bookmarks;
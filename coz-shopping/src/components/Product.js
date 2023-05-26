import styled from "styled-components";

import bookmarkOn from '../img/bookmark_on.svg'
import bookmarkOff from '../img/bookmark_off.svg'
import { useState, useEffect } from "react";

const ProductContainer = styled.li`
    height: 265px;
    width: 260px;
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    margin-right: 12px;
`
const ImageContainer = styled.div`
    position: relative;
    height: 200px;
    width: 260px;
`
const Image = styled.img`
    height: 200px;
    width: 260px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`
const Star = styled.img`
    cursor: pointer;
    position: absolute;
    bottom: 12px;
    right: 12px;
`
const ExBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
`

const Explanation = styled.div`
    height: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.h4`
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
`
const Percent = styled.h4`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #452CDD;
`
const SubTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`
const Price = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    right: 0;
`

const Product = ({ product, isModalOpen, setIsModalOpen, notify }) => {
    const [bookmarked, setBookmarked] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    useEffect(() => {
        const bookmarkList = localStorage.getItem('bookmarks');
        if (bookmarkList) {
          const parsedList = JSON.parse(bookmarkList);
          const isBookmarked = parsedList.some((item) => item.id === product.id);
          setBookmarked(isBookmarked);
        }
      }, [product.id]);

    if(!product){
        return <ProductContainer>아무것도 없어용</ProductContainer>
    }

    const toggleBookmark = () => {
        let bookmarkList = localStorage.getItem('bookmarks');
        if(!bookmarkList){
          bookmarkList = [];
        } else {
          bookmarkList = JSON.parse(bookmarkList);
        }
        const removingIndex = bookmarkList.findIndex((item) => item.id === product.id);
        if (removingIndex !== -1) {
          bookmarkList.splice(removingIndex, 1);
        } else {
          bookmarkList.push(product);
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));

        setBookmarked(!bookmarked);
        if(bookmarked) notify('off')
        else if(!bookmarked) notify('on')
    };

    const openModal = () => {
        setIsModalOpen(true);
    }
    
    const id = product.id;
    const type = product.type;
    let imgUrl = "";
    let name = "";
    let percent = null;
    let price = null;
    let follower = null;
    let sub_title = null;

    if (type === 'Product'){
        name = product.title;
        price = `${product.price}원`;
        percent = product.discountPercentage;
        imgUrl = product.image_url;
    } else if (type === 'Category'){
        name = `# ${product.title}`;
        imgUrl = product.image_url;
    } else if (type === 'Exhibition'){
        name = product.title;
        sub_title = product.sub_title;
        imgUrl = product.image_url;
    } else {
        name = product.brand_name;
        follower = product.follower;
        imgUrl = product.brand_image_url;
    }

    const handleProductId = (id) => {
        setSelectedId(id)
    }

    return (
        <ProductContainer key={id} onClick={() => openModal}>
            <ImageContainer>
                <Image src={imgUrl} alt={name}/>
                <Star
                    src={bookmarked ? bookmarkOn : bookmarkOff}
                    alt={bookmarked ? "bookmarked" : "not bookmarked"}
                    onClick={(e) => toggleBookmark()}
                />
            </ImageContainer>
            <ExBox>
                <Explanation>
                    <Name>{name}</Name>
                    {percent ? <Percent>15%</Percent> : <></>}
                    {follower ? <Name>관심고객수</Name> : <></>}
                </Explanation>
                <Explanation>
                    {sub_title ? <SubTitle>{sub_title}</SubTitle> : <p></p>}
                    {price ? <Price>{price}</Price> : <></>}
                    {follower ? <Price>{follower}</Price> : <></>}
                </Explanation>
            </ExBox>
            
        </ProductContainer>
    )

}

export default Product;
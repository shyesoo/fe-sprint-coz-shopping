import React, {useState} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import logo from "./img/logo.svg"

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 76px;
    padding-right: 76px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 2;
`

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Title = styled.h1`
    font-size: 32px;
    color: black;
    margin: 12px;
`

const MenuIcon = styled(FaBars)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
  z-index: 2;
`

const MenuToggle = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    transition: 1s;
    z-index: 1;
    right: 30px;
    position: absolute;
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    background: #FFFFFF;
    border-radius: 12px;
    width: 196px;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
`

const MenuItem = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    padding: 8px;
    text-decoration-line: none;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    width: 180px;
    height: 25px;
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div>
            <HeaderContainer>
                <Link to={'/'} className='deleted-line'>
                    <TitleContainer>
                        <Logo src={logo} alt="logo"/>
                        <Title>COZ Shopping</Title>
                    </TitleContainer>
                </Link>
                <MenuIcon onClick={handleMenuToggle}/>
            </HeaderContainer>
            <MenuToggle isOpen={isMenuOpen}>
                <MenuContainer>
                    <MenuItem href="#">ㅇㅇㅇ님, 안녕하세요!</MenuItem>
                    <Link to={'/products/list'} className='deleted-line'>
                        <MenuItem href="#">상품리스트 페이지</MenuItem>
                    </Link>
                    <Link to={'/bookmark'} className='deleted-line'>
                        <MenuItem href="#">북마크 페이지</MenuItem>
                    </Link>
                </MenuContainer>
            </MenuToggle>
        </div>
  )
}

export default Header;
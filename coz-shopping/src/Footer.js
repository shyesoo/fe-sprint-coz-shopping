import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: white;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const Text = styled.p`
    color: #888888;
    font-size: 12px;
    line-height: 88.02%;
    font-style: normal;
    margin: 3px;
`

const Footer = () => {
  return (
    <FooterContainer>
        <Text>개인정보 처리방침 | 이용 약관</Text>
        <Text>All rights reserved @ Codestates</Text>
    </FooterContainer>
  )
}

export default Footer;
import React from 'react';
import styled from "styled-components";

const CartCard = (props) => {
  
  return (
    <React.Fragment>
      <CartBox>
        <input type="checkbox" checked />
        <img src="https://img-cf.kurly.com/shop/data/goods/1597914553230i0.jpg" width="60px" height="78px"/>
        <p>100% 미국 몽모랑시 NFC 타트체리 주스</p>
      <CountBox>
        <CountBtn>-</CountBtn>
        <CountSpan>1</CountSpan>
        <CountBtn>+</CountBtn>
      </CountBox>
        <p>37,500원</p>
      </CartBox>
    </React.Fragment>
  )

}

export default CartCard;

const CartBox = styled.div`
  
  display: flex;
  height: 150px;
  align-items: center;
  gap:26px;
  margin-left:-10px;
  border-bottom:1px solid lightgray;

  & p{
    margin-top:10 px;
  }
`

const CountBox = styled.div`
    margin:0px 50px;
    border:1px solid lightgray;
    border-radius: 4px;
    overflow: hidden;
    width:82px;
    height: 26px;
    display: flex;
`;
const CountBtn = styled.button`
    width:28px;
    height: 22px;
    background-color: white;
    font-size: 18px;
    position: relative;
    top:-3px;
    border:none;
    outline: none;
    cursor: pointer;
`;

const CountSpan = styled.span`
    display: inline-block;
    width:28px;
    height: 22px;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    position: relative;
`;
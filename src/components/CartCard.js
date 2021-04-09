import React, { useState } from 'react';
import styled from "styled-components";
import cart, { actionCreators as cartActions } from '../redux/modules/cart';
import { useDispatch } from 'react-redux';
import { priceUnit } from '../shared/common';

const CartCard = (props) => {
  //수량세팅
  const [count, setCount] = useState(props.productCount);
  const originalPrice = props.productPrice;
  const dispatch = useDispatch();

 
  return (
    <React.Fragment>
      <CartBox>
      
        <img src={props.productImg} width="60px" height="78px"/>
        <TitleBox>
          <h4>{props.productTitle}</h4>
        </TitleBox>
        <CountBox>
          <CountBtn onClick={() => {
            if (count === 1) {
              return false;
            }
            setCount(count - 1);
            dispatch(cartActions.updateCartAPI(props.cid,count-1));
            
          }}>-</CountBtn>
          <CountSpan>{count}</CountSpan>
          <CountBtn onClick={() => {
            setCount(count + 1);
            dispatch(cartActions.updateCartAPI(props.cid,count+1));
           
          }}>+</CountBtn>
        </CountBox>
          <h4>{priceUnit(originalPrice*count)} 원</h4>
        <DeleteBtn onClick={() => {
          dispatch(cartActions.deleteCartAPI(props.cid));
         
         }}/>
        </CartBox>
    </React.Fragment>
  )

}

export default CartCard;


const TitleBox = styled.div`
  width:285px;
  text-align: left;
  margin-left: 12px;
`

const DeleteBtn = styled.button`
  background-image: url('https://res.kurly.com/pc/service/cart/2007/ico_delete.svg');
  background-position: 50% 50%;
  background-color: #ffffff;
  outline: none;
  border:none;
  width:30px;
  height:30px;
  cursor: pointer;
`
const CartBox = styled.div`
  
  display: flex;
  height: 150px;
  align-items: center;
  gap:10px;
  margin-left:-10px;
  border-bottom:1px solid #EAEAEA;
  padding:0px 30px;
  & h4{
    font-size:16px;
    font-weight: 400;
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
import React from "react";
import styled from 'styled-components';
import { Text, Grid } from "../elements";

const Product = (props) => {
  return (
    <React.Fragment>
      
          <ProductBox>
            <ProductImgBox>
          <img src={ props.img} />
              <CartBtnBox>
            <CartBtn onClick={() => { alert(`${props.pid} 상품 장바구니에 담김!`)}}/>
              </CartBtnBox>
            </ProductImgBox>
        <Text size="20px" margin="7px 0px 5px 0px">{ props.title}</Text>
        <Text size="18px" bold>{ props.price}원</Text>
        <Text size="12px" color="#999999" margin="8px 0px">{ props.subtext}</Text>
          </ProductBox>
        
    </React.Fragment>
  )

}


const ProductBox = styled.div`
  height: 640px;
  cursor: pointer;
`

const ProductImgBox = styled.div`
  overflow: hidden;
  position: relative;
  
  & img{
    margin:0px;
    padding:0px;
    width:309px;
    height:397px;
 }
`
const CartBtnBox = styled.div`
position: absolute;
bottom:14px;
right: 14px;
`

const CartBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  outline: none;
  cursor: pointer;
  border: none;
  color:transparent;
  background:url(https://res.kurly.com/pc/ico/2010/ico_cart.svg) no-repeat 50% 50%;
`

export default Product;
import React, { useState } from "react";
import styled from 'styled-components';
import { Text, Grid } from "../elements";
import { Product } from "../components";
import {RESP} from '../shared/response';
const ProductList = (props) => {
  
  const productItem = RESP.PRODUCTS.result;
  console.log(productItem);
  
  return (
    <React.Fragment>
      <Grid padding="50px 30px">
        <Text size="14px" color="#000000">베스트</Text>
        <Grid  flex padding="0px 10px">
          <Text size="12px" margin="10px 0px 0px 0px" color="#5f0080">전체보기</Text>
          <DropDown>
            <SortText className="dropbtn">신상품순</SortText>
            <DropDownContent className="dropdown-content">
              <DropDownMenu>인기상품순</DropDownMenu>
              <DropDownMenu>낮은 가격순</DropDownMenu>
              <DropDownMenu>높은 가격순</DropDownMenu>
            </DropDownContent>
        </DropDown>
        </Grid>
         <Grid gridBox margin="25px 0px">
          
          {productItem.map((p, idx) => {
          
            return (
              <Product {...p} key={p.id}/>
            )

          })}
          
        </Grid>
      </Grid>
    </React.Fragment>
  )

}

export default ProductList;

const SortText = styled.button`
  border:none;
  outline: none;
  background-color: white;
  font-size: 12px;
  cursor: pointer;
  margin-right: 10px;
  font-weight:400;
  &:hover{
    color:#5f0080;
  }
  
  &::after{
    content: '';
    display: inline-block;
    width:15px;
    height: 15px;
    background: url('https://res.kurly.com/pc/service/common/1908/ico_arrow_down_20x20.png') no-repeat;
    background-position:60% 75%;
    background-size: 10px 10px;
    margin-left: 3px;
  }
   &:hover::after{
    background: url('https://res.kurly.com/pc/service/common/1908/ico_arrow_up_20x20.png') no-repeat;
    background-position:60% 75%;
    background-size: 10px 10px;
 
 }
`
const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover .dropdown-content {
    display: block;
  }
`

const DropDownContent = styled.div`
  display: none;
  text-align: right;
  position: absolute;
  top:25px;
  left:-15px;
  background-color: white;
  width:90px;
  z-index:150;
  box-sizing: border-box;
  padding-right: 10px;
  box-shadow: 0px 1px 3px #A0A0A0;

`

const DropDownMenu = styled.p`
  margin: 22px 0px;
  font-size:12px;
  cursor: pointer;

  &:hover{
    color:#5f0080;
    font-weight: 500;
  }
`

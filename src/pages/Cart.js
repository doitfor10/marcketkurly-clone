import React from "react";
import styled from 'styled-components';
import styeld from 'styled-components';
import { Button, Grid } from "../elements";
import { CartCard } from '../components';
const Cart = (props) => {
  
  return (
    <React.Fragment>
     <Grid margin="0px 0px 70px 0px"> 
      <TitleBox>
         <Title>장바구니</Title>
          <DeleteUl>
            <input type="checkbox" checked/>
            <li>전체선택(1/1)</li>
            <li> 선택 삭제</li>
          </DeleteUl>
      </TitleBox>
        <ParentBox>
          <Box2>
             <p>장바구니에 담긴 상품이 없습니다</p> 
          </Box2>
        <ParentBox2>
          <Box3>
            <img src="https://res.kurly.com/pc/service/cart/2007/ico_location.svg" height="20px" />
            <span className='address'>배송지</span>
            
            <p style={{margin:'7px 0px 0px 0px'}}><span style={{ color: "#5f0080" }}>배송지를 입력하고</span>
              <br /> 배송유형을 확인해 보세요!</p>
            <InputBox>
              <AddressImg src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"/>
              <span>주소 검색</span>
            </InputBox>
        </Box3>
          <PriceBox>
            <ProductPriceBox>
              <p>상품금액</p><p>0원</p>
            </ProductPriceBox>
             <ProductPriceBox>
              <p>배송비</p><p>2,500원</p>
            </ProductPriceBox>
              <ProductPriceBox>
              <p>결제예정금액</p><p>0원</p>
            </ProductPriceBox>
            </PriceBox>
            <Button margin="25px 0px">상품을 담아주세요</Button>
            <Info>
              <li>· '입금확인' 상태일 때는 주문 내역 상세에서 직접 주문취</li>
              <li>소가 가능합니다.</li>
              <li>· '입금확인' 이후 상태에는 고객센터로 문의해주세요.</li>
            </Info>
          </ParentBox2>
        </ParentBox>
      </Grid>
    </React.Fragment>
  )

}

export default Cart;



const DeleteUl = styled.ul`
  display: flex;
  font-size:14px;
  position: relative;
  left:-30px;
  top:60px;
  gap:15px;

  & li:nth-child(1):after{
    content:'|';
    margin-left:15px;
    color:#dddddd;
  }

`

const Info = styled.ul`
  font-size:12px;
  margin:0px;
  padding:0px;
  color:#666666;

  & li:nth-child(2){
    padding-left: 12px;
  }
  & li:nth-child(3){
    margin-top:10px;
  }
`

const ProductPriceBox = styeld.div`
display:flex;
height:35px;
justify-content:space-between;
padding:0px 20px;
font-size:16px;
color:#4c4c4c;
`

const Title = styeld.div`
text-align:center;
font-size:30px;
font-weight:600;
`

const TitleBox = styled.div`
  padding:55px 0px;
 
`
const Box2 = styeld.div`
width:742px;
border-top: 1px solid #333; 
padding-left:9px;
line-height: 20px;
box-sizing: content-box;
margin:10px;
font-size:14px;
text-align:center;
font-weight:500;

& p{
  font-size: 16px;
  margin-top:150px;
}
`

const Box3 = styeld.div`

border-bottom: 1px solid #f2f2f2; 
padding: 20px 20px 20px 16px;
box-sizing: border-box;
font-size:16px;
font-weight:500;

& span.address{
  position: relative;
  top:-4px;
  left:5px;
  color:#4c4c4c;
}

`
const ParentBox = styeld.div`
display:flex;
height:500px;

`
const InputBox = styeld.div`
border:1px solid purple;
margin:17px 0px 0px;
border-radius:5px;
height:36px;
width:244px;
text-align:center;
line-height:33px;
font-size:12px;
color:purple;
position: relative;
z-index: 2;
`

const AddressImg = styled.img`
  width:20px;
  height: 21px;
  position: relative;
  top:7px;

`

const PriceBox = styeld.div`
background-color:#f8f9fa;
font-size:16px;
padding-bottom:30px;
`

const ParentBox2 = styeld.div`
padding: 0px 0px 0px 0px;
width:285px;
height:310px;
border: 1px solid #f2f2f2;
position: relative;
top:10px;
left:10px;
`
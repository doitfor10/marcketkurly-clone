import React from "react";
import styled from 'styled-components';
import { Text } from "../elements";
import { Modal } from '../components';
const Product = (props) => {
  return (
    <React.Fragment>
      
          <ProductBox>
            <ProductImgBox>
          <img src={ props.img} />
              <CartBtnBox>
                <Modal product={props}/>
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
  width:309px;
  height: 397px;
  
  & img{
    margin:0px;
    padding:0px;
    width:309px;
    height:397px;
    -webkit-transform:scale(1);
    -moz-transform:scale(1);
    -ms-transform:scale(1); 
    -o-transform:scale(1);    
    transform:scale(1);
    -webkit-transition:.4s;
    -moz-transition:.4s;
    -ms-transition:.4s;
    -o-transition:.4s;
    transition: .4s;
    &:hover{
      transform:scale(1.1);
      -webkit-transform:scale(1.1);
      -moz-transform:scale(1.1);
      -ms-transform:scale(1.1); 
      -o-transform:scale(1.1);
      
    }
 }
`
const CartBtnBox = styled.div`
position: absolute;
bottom:14px;
right: 14px;
`



export default Product;
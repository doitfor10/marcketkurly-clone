import React, { useState } from 'react';
import styled from 'styled-components';
import "../scss/modal.scss";
import { Text, Grid } from './index';

const CartModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close,product } = props;
    const [count, setCount] = useState(0);
    const total = product.price * count;
return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        <Text size="14px">{product.title}</Text>
                        <Grid flex>
                            <MiniPrice>{product.price}원</MiniPrice>
                            <CountBox>
                                <CountBtn onClick={() => {
                                    if (count === 0) {
                                        return false;
                                    }
                                    setCount(count - 1);
                                }}>-</CountBtn>
                                <CountSpan>{count}</CountSpan>
                                <CountBtn onClick={() => {
                                    setCount(count + 1);
                                }}>+</CountBtn>
                            </CountBox>
                        </Grid>
                    </header>
                    <main>
                    <TotalBox>
                        <span>합계</span>
                        <TotalInnerBox>
                            <div>
                            <TotalPrice>{total}</TotalPrice>
                            <Dollar>원</Dollar>
                            </div>
                            
                            <Text size="14px"><SaveMoney>적립</SaveMoney>로그인 후, 적립혜택 제공</Text>
                        </TotalInnerBox>
                       </TotalBox>
                    </main>
                    <footer>
                        <button className="close" onClick={close}> 취소 </button>
                        <button className="pupleBtn"> 장바구니 담기 </button>
                    </footer>   
                </section>
            ) : null }
        </div>
    )
}

export default CartModal;

const MiniPrice = styled.p`
    font-size:14px;
    font-weight:600;
`;
const CountBox = styled.div`
    border:1px solid lightgray;
    border-radius: 4px;
    overflow: hidden;
`;
const CountBtn = styled.button`
    width:28px;
    height: 22px;
    background-color: white;
    font-size: 18px;
    position: relative;
    top:-3px;
`;

const CountSpan = styled.span`
    display: inline-block;
    width:28px;
    height: 22px;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    position: relative;
    top:-2px;
`;
const TotalBox = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const TotalInnerBox = styled.div`

    text-align:right;
    position: relative;
    top:-4px;

`;

const TotalPrice = styled.span`
    margin:0px;
    padding:0px;
    font-size: 24px;
    margin-right: 2px;
`
const Dollar = styled.span`
    position: relative;
    top:-3px;
`

const SaveMoney = styled.span`
    font-size:11px;
    display: inline-block;
    padding:1px 8px;
    color:#ffffff;
    font-weight: 500;
    border-radius:12px;
    border:1px solid #F7965F;
    text-align: center;
    background-color: #FFBF00;
    vertical-align: middle;
    position: relative;
    right:5px;
    top:-1px;
    
`
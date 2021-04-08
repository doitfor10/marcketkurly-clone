import React, { useState } from 'react';
import CartModal from '../elements/CartModal';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
function Modal(props) {
    const [ modalOpen, setModalOpen ] = useState(false);
    const { product } = props;
    const user_info = useSelector((state) => state.user.user);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <React.Fragment>
            <CartBtn onClick={() => {
                if(!user_info){
                    alert('로그인 후 사용해주세요!');
                    return false;
                }
                openModal();
                }
            }/>
            <CartModal open={modalOpen} close={closeModal} product={ product}/>
       </React.Fragment>
    )
}

export default Modal;

const CartBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  outline: none;
  cursor: pointer;
  border: none;
  color:transparent;
  background:url('https://res.kurly.com/pc/ico/2010/ico_cart.svg') no-repeat 50% 50%;
`
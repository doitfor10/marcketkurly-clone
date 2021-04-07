import React, { useState } from 'react';
import CartModal from '../elements/CartModal';
import styled from 'styled-components';
function Modal(props) {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [ modalOpen, setModalOpen ] = useState(false);
    const { product } = props;
    /*const product = {
        pid:1,
        title: '[kurly\'s] 국산콩 두부 300g',
        price: 1900,
    }
    */
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <React.Fragment>
            <CartBtn onClick={ openModal }/>
            
            <CartModal open={modalOpen} close={closeModal} product={ product}/>

                {/* <main> { props.children } </main> */}
                
           
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
  background:url(https://res.kurly.com/pc/ico/2010/ico_cart.svg) no-repeat 50% 50%;
`
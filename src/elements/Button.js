import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  
  const { text, _onClick, children, margin, width, padding, bg, color, disabled } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    bg: bg,
    color: color,
   
  }

  return (
    <React.Fragment>
      <BasicButton {...styles} _onClick={_onClick} disabled={disabled}>{text? text:children}</BasicButton>
    </React.Fragment>
  )

}

Button.defaultProps = {
  text: false,
  _onClick : () => { },
  children: null,
  margin: false,
  width: '100%',
  padding: '15px 15px',
  bg: '#5f0081',
  color: 'white',
  disabled: false,
 
}

const BasicButton = styled.button`
  width:${(props) => props.width};
  cursor:pointer;
  background-color: ${(props) => props.bg};
  color:${(props) => props.color};
  padding:${(props) => props.padding};
  border: 1px solid #5f0081;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 16px;
  ${(props) => (props.margin ? `margin:${props.margin};` : '')}
  outline: none;
  &:focus{
    outline: none;
  }
  &:disabled{
    background-color: #ddd;
    border:1px solid #ddd;
  }
`

export default Button;
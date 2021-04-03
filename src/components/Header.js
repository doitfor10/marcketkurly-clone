import React from 'react';
import styled from 'styled-components';
import { Grid,Text,Button} from '../elements';
import HeaderLeftImg  from '../images/header-left-delivery.gif';

const Header = (props) => {
  

  return (
    <React.Fragment>
      <Grid bg="beige">
        <Grid flex width="1050px" margin="0px auto" bg="white" height="37px">
          <img style={{cursor:'pointer', margin:'3px 0px 0px 0px'}}src={HeaderLeftImg} width="163px"/>
          <HeaderMenu>
            <li>회원가입</li>
            <li>로그인</li>
            <li>고객센터</li>
          </HeaderMenu>
        </Grid>
         
      </Grid>
    </React.Fragment>
  )

};

export default Header;

const HeaderMenu = styled.ul`
  list-style-type: none;
  display: flex;
  font-size: 12px;
 
  & li{
    padding: 0px 22px 0px 0px;

  }
  & li:nth-child(1){
    color:#5f0080;
  }
`;
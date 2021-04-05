import React from 'react';
import styled from 'styled-components';
import { Input, Text, Grid, Button } from '../elements';
import { history } from "../redux/configStore";

const Login = (props)=> {
  
  return (
    <React.Fragment>
     <LoginBox>
        <Text size="20px" bold margin="0px 0px 30px 0px">로그인</Text>
        <Input placeholder="아이디를 입력해주세요" />
        <Input placeholder="비밀번호를 입력해주세요" margin="10px 0px" />
        <Grid flex width="340px" margin="-15px 0px 0px 0px">
          <Text size="13px">보안접속</Text>
          <Grid>
          <FindIdPw>
            <li>아이디찾기</li>
            <li>비밀번호 찾기</li>
          </FindIdPw>
          </Grid>
        </Grid>
        <Button margin="17px 0px 0px 0px">로그인</Button>
        <Button margin="10px" bg="#ffffff" color="#5f0080" _onClick={() => {
          history.push('/signup');
        }}>회원가입</Button>
     </LoginBox>
      
    </React.Fragment>
  )

}

export default Login;

const LoginBox = styled.div`
  width:340px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding:90px 0px 120px 0px;
`;

const FindIdPw = styled.ul`
  font-size:13px;
  display: flex;
  gap:5px;
  
  & li:nth-child(1)::after{
    content: '|';
    font-size: 6px;
    font-weight: 600;
    margin-left: 5px;
    position: relative;
    top:-2px;
  }
    
  }

`
import React from 'react';
import styled from "styled-components";
import { Input, Text, Grid, Button } from '../elements';
import '../scss/login.scss';
import { idCheck, pwMacth, pwContinuous,emailCheck } from '../shared/common';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Signup = (props) => {
  
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pwCheck, setPwCheck] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [idDup, setIdDup] = React.useState(false);
  const [emailDup, setEmailDup] = React.useState(false);
  const dispatch = useDispatch();



  //해당 조건 충족 여부에 따라 info 다르게..
  const changeId = (e) => {
    
    setId(e.target.value);
    const idInfo = document.querySelector('ul.checkId li:nth-child(1)');
      
      if (!idCheck(e.target.value)) {
      idInfo.classList.add('error');
      idInfo.classList.remove('ok');
      
    } else {
      idInfo.classList.add('ok');
      idInfo.classList.remove('error');
      }
  }

  const changePw = (e) => {
    
    const targetPw = e.target.value;
    setPw(targetPw);
    const pwInfo_len = document.querySelector('ul.checkPw li:nth-child(1)');
    const pwInfo_match = document.querySelector('ul.checkPw li:nth-child(2)');
    const pwInfo_continuous = document.querySelector('ul.checkPw li:nth-child(3)');

    if (targetPw.length < 10) {
      pwInfo_len.classList.add('error');
      pwInfo_len.classList.remove('ok');
    } else {
      pwInfo_len.classList.remove('error');
      pwInfo_len.classList.add('ok');
    }

    if (!pwMacth(targetPw)) {
      pwInfo_match.classList.add('error');
      pwInfo_match.classList.remove('ok');
    } else {
      pwInfo_match.classList.add('ok');
      pwInfo_match.classList.remove('error');
    }

    if (pwContinuous(targetPw)) {
      pwInfo_continuous.classList.add('error');
      pwInfo_continuous.classList.remove('ok');
    } else {
      pwInfo_continuous.classList.add('ok');
      pwInfo_continuous.classList.remove('error');
    }
  }

  const changePwMacth = (e) => {
    const checkPw = e.target.value;
    setPwCheck(checkPw);
    const RePwInfo = document.querySelector('ul.ReCheckPw li:nth-child(1)');

    if (pw === checkPw) {
      RePwInfo.classList.add('ok');
      RePwInfo.classList.remove('error');
    } else {
      RePwInfo.classList.add('error');
      RePwInfo.classList.remove('ok');
    }
  }

  const checkIdAPI = (id) => {
    
  const idInfo = document.querySelector('ul.checkId li:nth-child(2)');
  const API = `http://dmsql5303.shop/api/v1/signup/username/${id}`;
    fetch(API).then((response) => response.json())
      .then((result) => {
        if (result === false) {
          alert('이미 등록된 아이디입니다.');
          idInfo.classList.add('error');
          idInfo.classList.remove('ok');
          setIdDup(false);
        } else {
          alert('사용이 가능합니다.');
          idInfo.classList.add('ok');
          idInfo.classList.remove('error');
          setIdDup(true);
        }
      });
  }


  const checkEmailAPI = (email) => {
    
    const API = `http://dmsql5303.shop/api/v1/signup/email/${email}`;
    fetch(API).then((response) => response.json())
      .then((result) => {
        
        if (result === false) {
          
          alert('이미 등록된 이메일입니다. 다시 작성해 주십시오!');
          setEmailDup(false);

        } else {
          alert('사용이 가능합니다.');
          setEmailDup(true);
        }
      });
  }


  const signUp = () => {
    
    if (!idCheck(id) || !pwMacth(pw) || pwContinuous(pw) || pw !== pwCheck) {
      alert('아이디,비밀번호 확인을 해주세요.');
      return false;
    }

    if (userName === '') {
      alert('이름을(를) 입력해주세요.');
      return false;
    }

    if (email === '') {
      alert('이메일을 입력해주세요.');
      return false;
    }
    if (address === '') {
      alert('주소를 입력해주세요.');
      return false;
    }

    if (idDup === false) {
      alert('아이디 중복확인을 해주세요.');
      return false;
    }

    if (emailDup === false) {
      alert('이메일 중복확인을 해주세요.');
      return false;
    }
    
    if (!emailCheck(email)) {
      alert('이메일 형식을 지켜주세요!');
      return false;
    }

    dispatch(userActions.signupAPI(id,pw,userName,email,address));
  }


  return (
    <React.Fragment>
      <SignupBox>
        <Text bold size="30px">회원가입</Text>
        <RightBox>  
          <Text size="12px" color="#666666"><CheckSpan>*</CheckSpan>필수입력사항</Text>
        </RightBox>
        <Line />
        <SignTable>
          <tbody>
          <tr>
            <td>아이디<CheckSpan>*</CheckSpan></td>
            <td>
              <Grid flex width="460px">
                <Input placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" padding="14px" width="332px" _onClick={() => {
                  document.querySelector('.checkId').style.display = 'block';
                }} _onChange={(e) => {
                  changeId(e);
                }} />
                  <Button size="14px" bg="#ffffff" color="#5f0080" width="120px" padding="11px 14px" _onClick={() => {

                    if (!idCheck(id)) {
                      alert('아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다.');
                      return false;
                    }
                    checkIdAPI(id);
                  }}>중복확인</Button>
              </Grid>
              <InfoUl className="checkId">
                <li>· 6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                <li>· 아이디 중복확인</li>
              </InfoUl>   
            </td>
          </tr>
          <tr>
            <td>비밀번호<CheckSpan>*</CheckSpan></td>
            <td>
              <Grid flex>
                <Input placeholder="비밀번호를 입력해주세요" type="password" padding="14px" width="332px" _onClick={() => {
                  document.querySelector('.checkPw').style.display = 'block';
                }} _onChange={(e) => { changePw(e) }}/>
              </Grid>
              <InfoUl className="checkPw">
                <li>·10글자 이상 입력</li>
                <li>·영문/숫자/특수문자(공백 제외)만 허용,2개 이상의 조합</li>
                <li>·동일한 숫자 3개 이상 연속 사용 불가</li>
              </InfoUl>   
            </td>
          </tr>
          <tr>
            <td>비밀번호확인<CheckSpan>*</CheckSpan></td>
            <td>
              <Grid flex>
                <Input placeholder="비밀번호를 한번 더 입력해주세요" type="password" padding="14px" width="332px" _onClick={() => {
                  document.querySelector('.ReCheckPw').style.display = 'block';
                }} _onChange={(e) => { changePwMacth(e) }}/>
              </Grid>
              <InfoUl className="ReCheckPw">
                <li>·동일한 비밀번호를 입력해주세요.</li>
              </InfoUl>   
            </td>
          </tr>
          <tr>
            <td>이름<CheckSpan>*</CheckSpan></td>
            <td>
              <Grid flex>
                <Input placeholder="이름을 입력해주세요" padding="14px" width="332px"
                _onChange={(e) => { setUserName(e.target.value) }}/>
              </Grid>
            </td>
          </tr>
          <tr>
            <td>이메일<CheckSpan>*</CheckSpan></td>
            <td>
              <Grid flex width="460px">
                <Input placeholder="예: marketkurly@kurly.com" padding="14px" width="332px"
                _onChange={(e) => { setEmail(e.target.value) }}/>
                  <Button size="14px" bg="#ffffff" color="#5f0080" width="120px" padding="11px 14px" _onClick={() => {
                   
                    if (!emailCheck(email)) {
                      alert('이메일 형식을 지켜주세요!');
                      return false;
                    }
                    checkEmailAPI(email);
                  }}>중복확인</Button>
              </Grid>
            </td>
          </tr>          
          <tr>
            <td>주소<CheckSpan>*</CheckSpan></td>
            <td>
              <Grid flex>
                  <Input placeholder="주소를 입력해주세요" padding="14px" width="332px" _onChange={(e) => {setAddress(e.target.value) }}/>
              </Grid>
            </td>
            </tr>
          </tbody>
        </SignTable>
        <Button width="240px" _onClick={signUp}>가입하기</Button>
      </SignupBox>
    </React.Fragment>
  )
}

export default Signup;

const SignupBox = styled.div`
  width:640px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  padding: 64px 0px 120px 0px;
`

const CheckSpan = styled.span`
  color:#ee6a7b;
`

const Line = styled.span`
  display: block;
  width:100%;
  height: 2px;
  background-color: #333333;
  margin-top:10px;
`

const RightBox = styled.div`
  text-align: right;
  width:100%;
  margin: 23px 0px 0px 0px;
`

const SignTable = styled.table`
  margin-top:15px;
  padding-bottom: 49px;
  width:100%;
  & tr{
    text-align: left;
    font-size: 14px;
    font-weight: 500;
}
& td{
  position: relative;
  padding-bottom: 16px;
}
& td:nth-child(1){
  box-sizing: border-box;
  padding: 15px 0px 0px 18px;
  width:152px;
  vertical-align: top;
}
`
const InfoUl = styled.ul`

  font-size:12px;
  color:#666666;
  position: relative;
  left:-40px;
  font-weight: 400;

`
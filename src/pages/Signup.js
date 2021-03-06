import React, { useRef} from 'react';
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
  const idInfoOne = useRef(),
        idInfoTwo = useRef(),
        pwInfoLen = useRef(),
        pwInfoMatch = useRef(),
        pwInfoContinuos = useRef(),
        idInfoUl = useRef(),
        pwInfoUl = useRef(),
        pwReInfoUl = useRef(),
        pwInfoLi = useRef();

  //해당 조건 충족 여부에 따라 info 다르게..
  const changeId =  (e,idInfo) => {
    
    setId(e.target.value);
    
    if (!idCheck(e.target.value)) {
      idInfo.classList.add('error');
      idInfo.classList.remove('ok');
      
    } else {
      idInfo.classList.add('ok');
      idInfo.classList.remove('error');
      }
  }

  const changePw = (e,pwInfoLen,pwInfoMatch,pwInfoContinuos) => {
    
    const targetPw = e.target.value;
    setPw(targetPw);

    if (targetPw.length < 10) {
      pwInfoLen.classList.add('error');
      pwInfoLen.classList.remove('ok');
    } else {
      pwInfoLen.classList.remove('error');
      pwInfoLen.classList.add('ok');
    }

    if (!pwMacth(targetPw)) {
      pwInfoMatch.classList.add('error');
      pwInfoMatch.classList.remove('ok');
    } else {
      pwInfoMatch.classList.add('ok');
      pwInfoMatch.classList.remove('error');
    }

    if (pwContinuous(targetPw)) {
      pwInfoContinuos.classList.add('error');
      pwInfoContinuos.classList.remove('ok');
    } else {
      pwInfoContinuos.classList.add('ok');
      pwInfoContinuos.classList.remove('error');
    }
  }

  const changePwMacth = (e,rePwInfo) => {
    const checkPw = e.target.value;
    setPwCheck(checkPw);
    
    if (pw === checkPw) {
      rePwInfo.classList.add('ok');
      rePwInfo.classList.remove('error');
    } else {
      rePwInfo.classList.add('error');
      rePwInfo.classList.remove('ok');
    }
  }

  const checkIdAPI = (id,idInfo) => {
    
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
                  idInfoUl.current.style.display = 'block';
                }} _onChange={(e) => {
                  changeId(e,idInfoOne.current);
                }} />
                  <Button size="14px" bg="#ffffff" color="#5f0080" width="120px" padding="11px 14px" _onClick={() => {

                    if (!idCheck(id)) {
                      alert('아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다.');
                      return false;
                    }
                    checkIdAPI(id,idInfoTwo.current);
                  }}>중복확인</Button>
              </Grid>
                <InfoUl className="checkId" ref={idInfoUl}>
                <li ref={idInfoOne}>· 6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                <li ref={idInfoTwo}>· 아이디 중복확인</li>
              </InfoUl>   
            </td>
          </tr>
          <tr>
            <td>비밀번호<CheckSpan>*</CheckSpan></td>
            <td>
              <Grid flex>
                <Input placeholder="비밀번호를 입력해주세요" type="password" padding="14px" width="332px" _onClick={() => {
                  pwInfoUl.current.style.display = 'block';
                }} _onChange={(e) => { changePw(e,pwInfoLen.current,pwInfoMatch.current,pwInfoContinuos.current) }}/>
              </Grid>
              <InfoUl className="checkPw" ref={pwInfoUl}>
                <li ref={pwInfoLen}>·10글자 이상 입력</li>
                <li ref={pwInfoMatch}>·영문/숫자/특수문자(공백 제외)만 허용,2개 이상의 조합</li>
                <li ref={pwInfoContinuos}>·동일한 숫자 3개 이상 연속 사용 불가</li>
              </InfoUl>   
            </td>
          </tr>
          <tr>
            <td>비밀번호확인<CheckSpan>*</CheckSpan></td>
            <td>
              <Grid flex>
                <Input placeholder="비밀번호를 한번 더 입력해주세요" type="password" padding="14px" width="332px" _onClick={() => {
                  pwReInfoUl.current.style.display = 'block';
                }} _onChange={(e) => { changePwMacth(e,pwInfoLi.current)}}/>
              </Grid>
              <InfoUl className="ReCheckPw" ref={pwReInfoUl}>
              <li ref={pwInfoLi}>·동일한 비밀번호를 입력해주세요.</li>
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
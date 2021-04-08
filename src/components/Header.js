import React from 'react';
import styled from 'styled-components';
import { Grid} from '../elements';
import HeaderLeftImg  from '../images/header-left-delivery.gif';
import { history } from '../redux/configStore';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Header = (props) => {

  const is_login = useSelector((state) => state.user.is_login);
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  

  const headerChange = () => {
    const headerbox = document.querySelector('.header');
    const loginbox = document.querySelector('.scroll-event');
    
    if (window.scrollY > 105) {
      loginbox.style.display = 'none';
      headerbox.style.position = 'fixed';
      headerbox.style.zIndex = '300';
      headerbox.style.width = '1050px';
     
    } else {
      loginbox.style.display = 'block';
      headerbox.style.position = '';
    }
  };
  
React.useEffect(() => {
   

    dispatch(userActions.isLogin());
    window.addEventListener('scroll', headerChange);
  

    return () => window.removeEventListener('scroll', headerChange);
  }, []);

  return (
    <React.Fragment>
      <Grid width="1050px" margin="0 auto">
      <HeaderBox className="header">
        <ScrollMenu className="scroll-event">
          <Grid flex bg="white" height="37px">
            <img style={{cursor:'pointer', margin:'3px 0px 0px 0px'}}src={HeaderLeftImg} width="163px" alt="서울, 경기, 인천 샛별배송, 수도권 이외 지역 택배배송"/>
              <HeaderMenu>
                {!is_login && (
                  <React.Fragment>
                    <li onClick={()=>history.push('/signup') } className="header-menu signup">회원가입</li>
                    <li onClick={()=>history.push('/login')} className="header-menu">로그인</li>
                  </React.Fragment>
                )}
                {is_login && (
                <React.Fragment>
                  <li className="header-menu"><MemberSpan>일반</MemberSpan>{userInfo?.name} 님</li>
                    <li className="header-menu" onClick={() => {
                      dispatch(userActions.logout());
                    }}>로그아웃</li>
                </React.Fragment>)}
              <li className="arrow">고객센터</li>
            </HeaderMenu>
          </Grid>
            <Grid center height="63px">
            <LogoImg src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" width="103px" alt="마켓컬리 로고" style={{ cursor: 'pointer' }} onClick={()=>history.push('/')}/>
            </Grid>
          </ScrollMenu>
        <Grid flex>
          <Grid>
            <HeaderCategory>
              <li className="all-category">전체 카테고리</li>
              <li onClick={()=>history.push('/new')} >신상품</li>
              <li onClick={() => history.push('/')} >베스트</li>
              <li onClick={()=>history.push('/cheap')} >알뜰쇼핑 </li>
              <li onClick={()=> history.push('/event')}> 금주혜택</li>
            </HeaderCategory>
          </Grid>
          <Grid>
            <SearchInput type="text" placeholder="가볍고 고소한 키토 식단!"/>
          </Grid>
          <Grid>
            <Icons className="adress-icon"/>
              <Icons className="cart-icon" onClick={() => {
                if (!userInfo) {
                  alert('로그인 후 사용해주세요!');
                  return false;
                }
                history.push('/cart')
              }}>
             
            </Icons>
            
          </Grid>
        </Grid>
        </HeaderBox>
      </Grid>
    </React.Fragment>
  )

};

export default Header;

const HeaderBox = styled.div`
  
  background-color: #ffffff;
`

const HeaderMenu = styled.ul`
  
  display: flex;
  font-size: 12px;
 
  & li{
    padding: 0px 24px 0px 0px;
    position: relative;
    top:-1px;
    cursor: pointer;
    &.arrow{
      padding-right:11px;
    }
    &.arrow:after{
      content:'';
      width:8px;
      height: 5px;
      background: url('https://res.kurly.com/pc/ico/1908/ico_down_8x5.png');
      display: inline-block;
      position: relative;
      left:4px;

    }
    &.header-menu:after{
    content: '';
    float:right;
    width:1px;
    height: 13px;
    position: relative;
    top:4px;
    left:12px;
    background-color: #d8d8d8;
  }
  }
  & .signup{
    color:#5f0080;
   
  }
`
const LogoImg = styled.img`
  position: relative;
  top:-22px;
  left:-8px;
`
  ;

const HeaderCategory = styled.ul`
  display: flex;
  padding:0px;

  & li{
 
    padding:0px 75px 0px 0px;
    cursor: pointer;
    display: block;
    &:hover{
      color:#5f0081;
      
    }
  }  

  & .all-category:hover::before{
    content:url('https://res.kurly.com/pc/service/common/1908/ico_gnb_all.png');
    position :relative;
    top: 2px;
    margin-right:13px;
    
  }

  & .all-category::before{
    content:url('https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png');
    position :relative;
    top: 2px;
    margin-right:13px;
  }
   

`

const SearchInput = styled.input`
  box-sizing:border-box;
  border:1px solid #f7f7f7;
  background-color:#f7f7f7;
  border-radius:18px;
  outline: none;
  width:235px;
  height: 35px;
  color:#666;
  font-size: 12px;
  padding-left:14px;
  background-image: url('https://res.kurly.com/pc/service/common/1908/ico_search_x2.png');
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: center right +2px;
  font-size: 12px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -1px;
  &:focus{
    background-color:#ffffff;
  }
`

const Icons = styled.span`
display: inline-block;
width: 36px;
height: 36px;
position: relative;
top:3px;
cursor: pointer;
position: relative;
&.adress-icon{
  background-image: url('https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1');
  margin: 0px 20px 0px 18px;

  &:hover{
    background-image: url('https://res.kurly.com/pc/ico/2010/ico_delivery_setting_on.svg');
  }
}

&.cart-icon{
  background-image: url('https://res.kurly.com/pc/service/common/2011/ico_cart.svg');
  &:hover{
    background-image: url('https://res.kurly.com/pc/service/common/2011/ico_cart_on.svg?v=1');
  }
}
`;

const MemberSpan = styled.span`
  font-size:10px;
  color:#5f0080;
  border:1px solid #5f0080;
  padding: 0px 9px;
  border-radius: 15px;
  margin-right: 5px;

`;
const CartCount = styled.span`
  position: absolute;
  width:16px;
  height: 16px;
  background-color:#5f0080;
  border-radius: 100%;
  border:2px solid #ffffff;
  top:-1px;
  left:20px;
  font-size: 9px;
  color:#ffffff;
  text-align: center;
 
`;

const ScrollMenu = styled.div`
`;
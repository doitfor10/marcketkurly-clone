//아이디 체크 정규식
export const idCheck = (id) => {
 
  const _reg =/^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,}$/
  return _reg.test(id);
}

//패스워드 체크 정규식
export const pwMacth = (pw) => {
  
  const _reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/;
  return  _reg.test(pw) && pw.search(/\s/) == -1 ?true:false;

}

export const pwContinuous = (pw) => {
  
  const _reg = /(\w)\1\1/;
  return _reg.test(pw)
}

//이메일 체크 정규식
export const emailCheck = (email) => {

  let _reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return _reg.test(email);

}

//가격 단위 정규식 
export const priceUnit = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
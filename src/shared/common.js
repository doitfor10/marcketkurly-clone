export const idCheck = (id) => {
  
  //let _reg = /^[A-Za-z0-9]{6,}/g;
  const _reg =/^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,}$/
  return _reg.test(id);
}
//정규식 수정 
export const pwMacth = (pw) => {
  
  const _reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/;
  return  _reg.test(pw) && pw.search(/\s/) == -1 ?true:false;

}

export const pwContinuous = (pw) => {
  
  const _reg = /(\w)\1\1/;
  return _reg.test(pw)
}

export const emailCheck = (email) => {

  let _reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return _reg.test(email);

}

import React from 'react';
import { Text, Grid,Button } from "../elements";
import WAIT from '../images/wait.png';
import { history } from '../redux/configStore'

const Wait = (props) => {
  
  return (
    <React.Fragment>
      <Grid center padding="50px" height="390px">
        <img src={WAIT} width="200px"/>
        <Text bold size="22px" margin="-10px 0px 0px 0px">페이지 준비중 입니다~!</Text>
        <Button width="140px" size="12px" padding="10px" margin="12px" _onClick={()=>history.push('/')}>메인으로 돌아가기</Button>
      </Grid>
    </React.Fragment>
  )
}

export default Wait;


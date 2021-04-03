import React from 'react';
import { Grid,Text,Button} from '../elements';
import HeaderLeftImg  from '../images/header-left-delivery.gif';

const Header = (props) => {
  

  return (
    <React.Fragment>
      <Grid bg="beige">
        <Grid flex width="1050px" margin="0px auto" bg="white" height="37px">
          <img style={{cursor:'pointer'}}src={HeaderLeftImg} width="163px"/>
         
        </Grid>
         
      </Grid>
    </React.Fragment>
  )

};

export default Header;
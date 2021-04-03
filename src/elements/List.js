import React from 'react';
import styled from 'styled-components'

const List = (props) => {
  
  const { listItems } = props;
  const listItem = listItems.map((item,idx) => <li key={idx}>{item}</li>)
  

  return (
    <React.Fragment>
      <ListUl>
        {listItem}
      </ListUl>
    </React.Fragment>
  )

};

List.defaultProps = {
  listItem : null,
}

const ListUl = styled.ul`
  list-style-type: none;
  & li{
    display: inline;
  }
`

export default List;
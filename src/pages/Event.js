import React from 'react';
import { Grid } from "../elements";
const Event = (props) => {
  
  const img = [
    '//img-cf.kurly.com/shop/data/event/567e61e33d8a6c75a6078f43cc0ddc71.jpg',
    '//img-cf.kurly.com/shop/data/event/c8b3949e1f2bb1e80dc8196224e54880.jpg',
    '//img-cf.kurly.com/shop/data/event/252f76711b445e71ed4de60254c3a320.jpg',
    '//img-cf.kurly.com/shop/data/event/0e454861146289b02112b9967cf4698f.jpg',
    '//img-cf.kurly.com/shop/data/event/7e0a925cc29cf817339488d0f39a1f9c.jpg',
    '//img-cf.kurly.com/shop/data/event/43d6f8538a892a4a8e1486ced98c50b5.jpg',
    '//img-cf.kurly.com/shop/data/event/1039603d873292fdb60c72343eae0fbd.jpg',
    '//img-cf.kurly.com/shop/data/event/a21ceec84bd87d9ac6575deface98fa0.jpg'
  ]

  return (
    <Grid margin="0px 0px 150px 0px" width="1050px">
      {img.map((i, idx) => {
        return (
          <Grid key={idx} margin="0px 0px 10px 0px">
            <img src={i} width="1045px"/>
          </Grid>
        )
      })}
    </Grid>
  )
}
export default Event;

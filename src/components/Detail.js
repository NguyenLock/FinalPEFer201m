import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';




export default function Detail() {
  const staff = useParams();
  
  const [APIData, setAPIData] = useState([]);
  const getStaffsUrl = `https://65375e4bbb226bb85dd320ac.mockapi.io/declareASchema/${staff.id}`;

  useEffect(()=>{
    fetch(getStaffsUrl, {method: 'GET'}).then(
      response =>{
        if(!response.ok){
          throw new Error(`HTTP status: ${response.status}`);
        }
        return response.json()
      }
    )
    .then(data=>{setAPIData(data)})
    .catch(error=>console.log(error.message))
  },[getStaffsUrl])

  return (
    <div>
      <h1>Detail</h1>
      <Grid container rowSpacing={2}>
        <Grid className='parent' item xs={12}>
          <Card className='child'sx={{maxWidth: 545}}>
            <CardMedia sx={{height: 440}}
            component="img"
            image={APIData.avatar}
            title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component="div">
                <a href={`detail/${APIData.id}`}>{APIData.name}</a>
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                {APIData.address}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                {APIData.age}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                {APIData.createAt}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

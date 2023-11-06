import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../scss/Detail.scss';



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
    <div className='Detail'>
      <div className='content'>
        <h1 className='detail-title'>Staff</h1>
        <Grid className='full-box'>
        <Grid className='parent' item xs={12}>
          <Card className='child'sx={{maxWidth: 545}}>
            <CardMedia sx={{height: 440}}
            component="img"
            image={APIData.avatar}
            title="green iguana"
            />
            <CardContent className='text'>
              <Typography gutterBottom variant='h5' component="div">
               Name: {APIData.name}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
               Address {APIData.address}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                Age: {APIData.age}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                CreateAt {APIData.createAt}
              </Typography>
              <CardActions>
                <Link to={"/"}>
                  <Button size='small'>Home</Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
      
    </div>
    
  )
}

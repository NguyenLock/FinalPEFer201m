import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css'

function Home() {
  const [APIData, setAPIData] = useState([])
  const getStaffsUrl = 'https://65375e4bbb226bb85dd320ac.mockapi.io/declareASchema';

  useEffect(() => {
    axios.get(getStaffsUrl).then(
      response => {
        return response.data;
      }
    )
      .then(data => { setAPIData(data.sort((a, b) => { return b.age - a.age })) })
      .catch(error => console.log(error.message));
  }, [])



  return (
    <div className='content'>
      <>
        <h1 className='font-page'>Home</h1>
        <Grid container marginLeft='0px' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {APIData.map((staff) => (

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="260"
                image={staff.avatar}
              />
              <div className='card-content'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to={`detail/${staff.id}`}>
                      <a>{staff.name}</a>
                    </Link>
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    {staff.address}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    {staff.age}
                  </Typography>

                </CardContent>
              </div>
              <CardActions>
                <Button size="small">Detail</Button>
              </CardActions>
            </Card>
          ))};
        </Grid>
      </>

    </div>



  );

}

export default Home
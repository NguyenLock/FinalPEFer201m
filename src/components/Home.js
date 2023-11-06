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
import '../scss/Home.scss';


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
    <div className="Home">
    <div className="content" style={{ padding: '100px 0' }}>
      <h1 className='title-home'>Home</h1>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {APIData.map((data) => (
          <Grid item xs={2} sm={4} md={4} key={data.id}>
            <Card sx={{ maxWidth: 345 }} style={{ marginBottom: 20 }}>
              <CardMedia sx={{ height: 140 }} image={data.avatar} title={data.name} />
              <CardContent className='text'>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {data.age} years old
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.address}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/detail/${data.id}`}>
                  <Button size="small">Detail</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </div>



  );

}

export default Home
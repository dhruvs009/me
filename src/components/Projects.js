import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 275,
    marginLeft: 17,
    height: 440,
    backgroundColor: "#fefefe"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Projects() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <b>ATTRACT</b>
            </Typography>
            <img src={require('../assets/images/ATTRACT.png')} width="200" style={{borderRadius:10, margin: 18.75}}/>
            <Typography className={classes.pos} variant="body2" component="p">
              A noticeboard to stick paper on, using just electrostatic force generated all over the surface using a high voltage generating Tesla coil keeping in mind the design of the product from a customer's point of view.
            </Typography>
            <Typography style= {{fontSize:12, marginBottom:4}} variant="body2" component="p">
              <b>Advisor: </b>Dr. Aman Parnami
              <br />
              <b>Team: </b>(d)IED
              <br />
              <b>Members: </b>Pranay, Rachit, Chavisha, Dhruv
            </Typography>
            <Typography color="textSecondary" style={{fontSize:12}}>
              in Introduction to Engineering Design<br></br>(IIITD - Winter 2019)
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">More</Button>
          </CardActions> */}
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <b>GLIDE-IT</b>
            </Typography>
            <img src={require('../assets/images/GlideIT.jpeg')} width="200" style={{borderRadius:10, margin: 18.75}}/>
            <Typography className={classes.pos} variant="body2" component="p">
              A minimalistic glove that helps in giving presentations to change slides, playing and pausing videos and songs, and also to use as a mouse just by simple gestures of the hand while wearing it.
            </Typography>
            <Typography style= {{fontSize:12, marginBottom:4}} variant="body2" component="p">
              <b>Advisor: </b>Dr. Aman Parnami
              <br />
              <b>Team: </b>(d)IED
              <br />
              <b>Members: </b>Pranay, Rachit, Chavisha, Dhruv
            </Typography>
            <Typography color="textSecondary" style={{fontSize:12}}>
              in Introduction to Engineering Design<br></br>(IIITD - Winter 2019)
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">More</Button>
          </CardActions> */}
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <b>PvZ</b>
            </Typography>
            <img src={require('../assets/images/PlantsVSZombies.png')} width="200" style={{borderRadius:10, margin: 18.75}}/>
            <Typography className={classes.pos} variant="body2" component="p">
              A clone of the famous Plants Vs. Zombies written in Java using JavaFX. There was a major focus on object oriented programming and its underliying design principles. 
            </Typography>
            <Typography style= {{fontSize:12, marginBottom:4}} variant="body2" component="p">
              <b>Advisor: </b>Dr. Vivek Kumar
              <br />
              <b>Team Members: </b>Sargam, Dhruv
              <br />
              <a href="https://github.com/dhruvs009/PlantsVsZombies"><b>Link to Github repository.</b></a>
            </Typography>
            <Typography color="textSecondary" style={{fontSize:12}}>
              in Advanced Programming<br></br>(IIITD - Monsoon 2019)
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">More</Button>
          </CardActions> */}
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <b>GLIDE-IT</b>
            </Typography>
            <img src={require('../assets/images/GlideIT.jpeg')} width="200" style={{borderRadius:10, margin: 18.75}}/>
            <Typography className={classes.pos} variant="body2" component="p">
              A minimalistic glove that helps in giving presentations to change slides, playing and pausing videos and songs, and also to use as a mouse just by simple gestures of the hand while wearing it.
            </Typography>
            <Typography style= {{fontSize:12, marginBottom:4}} variant="body2" component="p">
              <b>Advisor: </b>Dr. Aman Parnami
              <br />
              <b>Team: </b>(d)IED
              <br />
              <b>Members: </b>Pranay, Rachit, Chavisha, Dhruv
            </Typography>
            <Typography color="textSecondary" style={{fontSize:12}}>
              in Introduction to Engineering Design<br></br>(IIITD - Winter 2019)
            </Typography>
          </CardContent> */}
          {/* <CardActions>
            <Button size="small">More</Button>
          </CardActions> */}
        {/* </Card>
      </Grid> */}
    </Grid>
  );
}
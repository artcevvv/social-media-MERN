import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./Assets/memories.png";
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'
import { Form, Posts } from "./components/exports";
import useStyles from './styles'


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=> {dispatch(getPosts())}, [dispatch])

  return (
      <Container maxWidth="lg">
      <AppBar className= {classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

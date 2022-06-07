import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import cottage from './../assets/images/cottage.jpg'

import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  }
})) 

export default function Home({}){
  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(()=> {
    setDefaultPage(auth.isAuthenticated())

    return () => {}
  }, [])

  return (
    <div className={classes.root}>
      { !defaultPage &&
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Home Page
          </Typography>
          <CardMedia className={classes.media} 
                      image={cottage} title="Cottage"/>
          <CardContent>
            <Typography variant="body2" component="p">
              Welcome to the MERN Skeleton home page.
            </Typography>
          </CardContent>
        </Card>
      }
      {defaultPage &&
        <Grid container spacing={8}>
          <Grid item xs={8} sm={7}>
            <Newsfeed/>
          </Grid>
          <Grid item xs={6} sm={5}>
            <FindPeople/>
          </Grid>
        </Grid>
      }
    </div>
  )
}
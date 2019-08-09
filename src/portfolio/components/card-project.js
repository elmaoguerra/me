import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import testImg from '../../images/projects/test.png'

const styles = (theme) =>({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
})
const CardProject = (props) => {
    const {classes} = props;

    return (
        <Grid container spacing={40}>
            {props.projects.map(card => (
              <Grid item key={card.id} sm={12} md={6} lg={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image={testImg}
                    title="Image title"
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <h2>
                      {card.title}
                    </h2>
                    <p>
                      {card.description}
                    </p>
                    <h3>Logros:</h3>
                    {card.goals.map((goal, i) => (
                      <ul key={i}>
                        <li>{goal}</li>
                      </ul>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
    )
}

export default withStyles(styles)(CardProject);
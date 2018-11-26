import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
    }});

function HomeLayout(props){
    const { classes, children } = props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(HomeLayout);
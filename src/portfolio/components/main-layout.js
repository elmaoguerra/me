import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    content: {
        flexGrow: 1,
        // padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
    
});

class MainLayout extends React.Component {

    render() {
        const {classes, children} = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        )
    }
}

export default  withStyles(styles, { withTheme: true })(MainLayout);
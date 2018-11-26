import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {drawerWidth} from '../../services/api';

const styles = theme => ({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            // display: 'none',
            height: 0,
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
});

const HeaderLayout = (props) => {

    const {classes, handleResumeOnClose} = props;
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open Menu"
                    onClick={handleResumeOnClose}
                    className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles, { withTheme: true })(HeaderLayout);
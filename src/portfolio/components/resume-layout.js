import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import '../../styles/resume.css';


import {drawerWidth} from '../../services/api';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        backgroundColor: '#00BCD4',
        color: '#fff',
        textAlign: 'center',
        width: drawerWidth,
    },
    
});

class ResumeLayout extends Component {
    

    
    render() {
        const { classes, children, handleResumeOnClose, mobileOpen } = this.props;
        return (
            <div className={classes.root}>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer variant="temporary" open={mobileOpen} width={drawerWidth}
                            onClose={handleResumeOnClose}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}>
                            {children}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open>
                            {children}
                        </Drawer>
                    </Hidden>
                </nav>

            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ResumeLayout);
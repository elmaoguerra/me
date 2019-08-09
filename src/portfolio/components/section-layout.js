import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { isNull } from 'util';
import { isUndefined } from 'util';
import { isNullOrUndefined } from 'util';

const styles = theme => ({
    section: {
        padding: '2em',
        [theme.breakpoints.up('sm')]: {
            padding: '5em',
        }
    },

    BlueTheme :{ backgroundColor: '#beecfa'},
    GrayTheme :{ backgroundColor: '#d1d1d1'},
    DarkTheme :{ backgroundColor: '#222', color: "#eee"},    
});

//const 

class SectionLayout extends React.Component {
    render() {
        const { classes, title, children, nameTheme, id } = this.props;
        let name = nameTheme;
        if(name === undefined)
            name = "BlueTheme";
        console.log(name);    

        const background = classes[name];
        console.log(background);    

        return (
            <section id={id} className={classes.section + "  " +  background}>
                <h2>{title}</h2>
                {children}
            </section>
        )
    }
}

export default withStyles(styles, { withTheme: true })(SectionLayout);
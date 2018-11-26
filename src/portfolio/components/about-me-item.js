import React from 'react';
import { Grid } from '@material-ui/core';
import '../../styles/about-me.css';

class AboutMeItem extends React.Component {

    render() {
        const { title, description } = this.props;
        return (
            <Grid container spacing={24} className="about-me-item">
                <Grid item sm={2}>
                    <span className="title">{title}:</span>
                </Grid>
                <Grid className="description-layout" item sm={10}>
                    <span className="description">{description}</span>
                </Grid>
            </Grid>
        )
    }
}
export default AboutMeItem;
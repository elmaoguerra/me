import React from 'react';
import { Grid } from '@material-ui/core';
import '../../styles/about-me.css';
import AboutMeItem from './about-me-item';

class AboutMeLayout extends React.Component {

    render() {

        const { aboutItems, profile, interest } = this.props;

        return (
            <Grid container spacing={24}>
                <Grid item sm={5} lg={4}>
                <p className="profile">{profile}</p>
                <p className="profile">{interest}</p>
                </Grid>
                <Grid item sm={7} lg={8}>
                    <div className="about-me-items">
                        {aboutItems.map((item, i) => {
                            return <AboutMeItem key={i} {...item} />
                        })}
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default AboutMeLayout;
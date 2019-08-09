import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Resume from '../../portfolio/containers/resume';

import { AboutMeSection, ProjectsSection, StudySection, SoftSkillSection } from '../../services/api';

import AboutMeLayout from '../../portfolio/components/about-me-layout';
import HeaderLayout from '../../portfolio/components/header-layout';
import MainLayout from '../../portfolio/components/main-layout';
import SectionLayout from '../../portfolio/components/section-layout';
import StudiesLayout from '../../portfolio/components/studies-layout';
import SkillLayout from '../../portfolio/components/skills-layout';
import CardProject from '../../portfolio/components/card-project';

class Home extends Component {

    state = {
        mobileOpen: false,
    };

    handleResumeOnClose = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    }

    render() {
        return (
            <HomeLayout>
                <HeaderLayout handleResumeOnClose={this.handleResumeOnClose}></HeaderLayout>
                <Resume mobileOpen={this.state.mobileOpen} handleResumeOnClose={this.handleResumeOnClose}></Resume>
                <MainLayout>
                    <SectionLayout {...AboutMeSection}>
                        <AboutMeLayout {...AboutMeSection}></AboutMeLayout>
                    </SectionLayout>

                    <SectionLayout {...SoftSkillSection} nameTheme="DarkTheme">
                        <SkillLayout {...SoftSkillSection}></SkillLayout>
                    </SectionLayout>
                    
                    <SectionLayout {...StudySection} nameTheme="GrayTheme">
                        <StudiesLayout {...StudySection}></StudiesLayout>
                    </SectionLayout>

                    <SectionLayout {...ProjectsSection}>
                        <CardProject {...ProjectsSection}></CardProject>
                    </SectionLayout>

                </MainLayout>
            </HomeLayout>
        )
    }
}

export default Home;
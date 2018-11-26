import React, { Component } from 'react';
import ResumeLayout from '../components/resume-layout';
import Image from '../components/image';
import Social from '../components/social';

import me from '../../images/me.jpg';
import Menu from '../components/menu';

class Resume extends Component {
    render() {
        return (
            <ResumeLayout {...this.props}>
                <Image src={me} className="meImage"></Image>
                <Social></Social>
                <Menu></Menu>
            </ResumeLayout>
        )
    }
}

export default Resume
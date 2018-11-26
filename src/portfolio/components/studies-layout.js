import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../../styles/study.css'
import SvgIcon from './svg-icon';
import FormalSvg from './formal-svg';
import ContinueSvg from './continue-svg';

const styles = {
    formalBackground: { background: 'rgb(33, 150, 243)' },
    continueBackground: { background: '#f38721' }
}

const formalIcon = (<FormalSvg viewBox={"0 0 48 48"}></FormalSvg>)
const continueIcon = (<ContinueSvg viewBox="0 0 74 74"></ContinueSvg>)

class StudiesLayout extends React.Component {
    render() {
        const studies = this.props.studies;

        return (
            <VerticalTimeline>
                {
                    studies.map((item, i) => {

                        const background = (item.formal) ? styles.formalBackground : styles.continueBackground;
                        const icon = (item.formal) ? formalIcon : continueIcon;

                        return (<VerticalTimelineElement key={i}
                            className={(item.formal) ? 'formal' : 'continue'}
                            date={item.year + ' - ' + item.city}
                            iconStyle={background}
                            // icon={<svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><title/><g id="Education"><path class="cls-1" d="M24.5,34h0C15.94,34,9,30.154,9,24V14H40V24C40,29.171,33.06,34,24.5,34Z"/><path class="cls-2" d="M46.171,9.991,27.3.764a7.518,7.518,0,0,0-6.6,0L1.829,9.991a3.26,3.26,0,0,0,.15,5.927L4.5,17l16.543,7.079a7.517,7.517,0,0,0,5.914,0L43.5,17l2.521-1.078A3.26,3.26,0,0,0,46.171,9.991Z"/><path class="cls-3" d="M40,38a1,1,0,0,1-1-1V19.361L24.918,12.14a1,1,0,1,1,.914-1.78L41,18.139V37A1,1,0,0,1,40,38Z"/><ellipse class="cls-1" cx="24.5" cy="11" rx="4.5" ry="3"/><circle class="cls-4" cx="40" cy="39" r="4"/></g></svg>}
                            // icon={<svg viewBox="0 0 74 74" xmlns="http://www.w3.org/2000/svg"><g><path class="st0" d="M63,3H11c-4.4,0-8,3.6-8,7.9v32.7c0,4.4,3.6,8,8,8h21.4c0.4,0.7,0.9,1.4,1.4,2l-3.6,12.7c-0.2,0.7,0,1.5,0.6,2   c0.6,0.5,1.4,0.7,2.1,0.4l3-1.1l2,2.6c0.4,0.5,1,0.8,1.6,0.8c0.1,0,0.2,0,0.4,0c0.7-0.1,1.3-0.7,1.5-1.4l1.8-6.2l1.8,6.2   c0.2,0.7,0.8,1.3,1.5,1.4c0.1,0,0.2,0,0.4,0c0.6,0,1.2-0.3,1.6-0.8l2-2.6l3,1.1c0.7,0.3,1.5,0.1,2.1-0.4c0.6-0.5,0.8-1.3,0.6-2   l-3.6-12.7c0.5-0.6,1-1.3,1.4-2H63c4.4,0,8-3.6,8-8V10.9C71,6.6,67.4,3,63,3z M51.3,45.6c0,4.6-3.7,8.3-8.3,8.3s-8.3-3.7-8.3-8.3   s3.7-8.3,8.3-8.3S51.3,41,51.3,45.6z M38.5,64.6L38,64c-0.5-0.7-1.5-1-2.3-0.7L35,63.6l2.1-7.3c1.1,0.6,2.2,1,3.4,1.3L38.5,64.6z    M50.3,63.4c-0.8-0.3-1.8,0-2.3,0.7l-0.5,0.6l-2-7c1.2-0.3,2.3-0.7,3.4-1.3l2.1,7.3L50.3,63.4z M67,43.7c0,2.2-1.8,4-4,4h-7.9   c0.1-0.7,0.2-1.4,0.2-2.1c0-1.7-0.3-3.3-0.9-4.7h4.5c1.1,0,2-0.9,2-2s-0.9-2-2-2h-7.2c-2.2-2.2-5.3-3.6-8.7-3.6s-6.5,1.4-8.7,3.6   H15.1c-1.1,0-2,0.9-2,2s0.9,2,2,2h16.5c-0.6,1.5-0.9,3-0.9,4.7c0,0.7,0.1,1.4,0.2,2.1H11c-2.2,0-4-1.8-4-4V10.9C7,8.8,8.8,7,11,7   H63c2.2,0,4,1.8,4,3.9V43.7z"/><path class="st0" d="M58.9,13.8H15.1c-1.1,0-2,0.9-2,2s0.9,2,2,2h43.8c1.1,0,2-0.9,2-2S60,13.8,58.9,13.8z"/><path class="st0" d="M58.9,25.3H15.1c-1.1,0-2,0.9-2,2s0.9,2,2,2h43.8c1.1,0,2-0.9,2-2S60,25.3,58.9,25.3z"/></g></svg>}
                            icon={icon}

                        >
                            <h3 className="vertical-timeline-element-title">{item.diploma}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.centerName} </h4>
                        </VerticalTimelineElement>)

                    })
                }
            </VerticalTimeline>
        )
    }
}

export default StudiesLayout;
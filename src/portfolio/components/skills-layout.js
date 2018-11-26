import React from 'react';
import ProgressSkill from './progress-skill';

class SkillLayout extends React.Component {
    render() {
        const { skills } = this.props;
        return (
            <div>
                {
                    skills.map((item, i) => {
                        return <ProgressSkill key={i} {...item}></ProgressSkill>
                    })
                }
            </div>
        )
    }
}

export default SkillLayout;
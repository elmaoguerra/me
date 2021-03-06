import React from 'react';
import ProgressSkill from './progress-skill';

class SkillLayout extends React.Component {
    render() {
        const { skills, description } = this.props;
        return (
            <div>
            <p>{description}</p>
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
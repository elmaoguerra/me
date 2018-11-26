import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    skill:{
        marginTop: '1.5em'
    }
}

class ProgressSkill extends React.Component {

    render() {
        const { completed, name } = this.props;
        const buffer = 100 - completed;
        return (
            <div style={styles.skill}>
                <div>{name}</div>
                <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
            </div>
        );
    }
}


export default (ProgressSkill);


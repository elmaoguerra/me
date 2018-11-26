import React from 'react';

import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import Image from '../components/image';

const Social = props => {
    return (
        <div className="social">
            <h4>Ingeniero de Desarrollo</h4>
            <div className="logos">
                <a href="#" target="_blank">
                    <Image src={github} className="socialImage"></Image>
                </a>

                <a href="#" target="_blank">
                    <Image src={linkedin} className="socialImage"></Image>
                </a>
            </div>
        </div>
    )
}

export default Social;
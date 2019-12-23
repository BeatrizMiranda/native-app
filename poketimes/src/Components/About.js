import React from 'react';
import Rainbow from '../HOC/Rainbow'

const About = () =>{
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis magni recusandae incidunt, explicabo non itaque sint aliquam voluptas natus sunt unde ipsam maiores illum dolorum fuga iusto dolore eaque ratione.
            </p>
        </div>
    )
}

export default Rainbow(About)
/** 
 * @file manages the landing page of the website. Consists of all code related to the canvas.
 */
import React from 'react';

export default class IFrameTest extends React.Component {
    render() {
        return (
            <div className="text-center"style={{width: '100%', height: '100%', minHeight: '660px'}}>
                <iframe sandbox="allow-same-origin" style={{width: '100%', height: '100%', minHeight: '660px'}} src="https://us.oneclick.ai/en/login" title="iframe test"></iframe>
            </div>
        );
    }
}
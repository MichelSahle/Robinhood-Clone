import React from 'react'
import LineGraph from './LineGraph';
import'./Newsfeed.css';
function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection"> 
                {/* chartSection has $(the Price) $123,323.32/ +21.11(+0.03) Today */}
                    <div className="newsfeed__portfolio">
                        <h1>$114,656</h1>
                        <p>+$44.63 (+0.04) Today</p>
                    </div>
                    <div className="newfeed__chart">
                        < LineGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed

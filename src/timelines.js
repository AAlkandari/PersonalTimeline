import React from 'react'

function Timelines(myTimeLine) {
    return (
        <div className="timelines">
        <img src={myTimeLine.image}/>
        <p>{myTimeLine.achiev}</p>
        <p>{myTimeLine.year}</p>
    </div>
    )
}

export default Timelines

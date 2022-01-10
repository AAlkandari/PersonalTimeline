import React from 'react'
import timelinesData from './data' 
import timeLine from './timelines';

function TimeLiness() {
           const timelineHTML = timelinesData.map(element => <timeLine timelinesData={element}/>);

           return <div className="MyTimeLine">{timelineHTML}</div>;
}

export default TimeLiness
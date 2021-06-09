import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faCalendar} from '@fortawesome/free-solid-svg-icons'

 const Datetime = ({date,month,year,hours,minutes,tz}) => {

    return (
        <div className="datetime">
            <div className="date">
             <FontAwesomeIcon icon={faCalendar} size="2x" className="icon"/>
             <span>{date}/{month}/{year}</span>
            </div>
            <div className="time">
             
                 <FontAwesomeIcon icon={faClock} size="2x" className="icon"/>
                 <span>{hours}:{minutes} {tz}</span>
            
            </div>
            
        </div>
    )
}
export default Datetime

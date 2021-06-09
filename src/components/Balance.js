import React from 'react'

 const Balance = ({date,month,year,bal}) => {
    return (
        <div className="balance">
                <div>         
                <p>{date}/{month}/{year}</p>
                 <h3>Final Balance</h3>
                </div>
                 <div> <h1>{bal}</h1>
                     </div>
                 
             
        </div>
    )
}
export default Balance;
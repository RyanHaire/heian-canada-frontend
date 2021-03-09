import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => { 
    const alertState = useSelector((state) => state.alert) || []
    console.log(alertState)
    return (
        <>
            { alertState !== [] 
                ? alertState.map(alert => (
                <div key={alert.id} className={`alert alert-${alert.alertType}`}>{alert.msg}{console.log(alert)}</div>
            ))
                : <div>No alerts</div>
            }
        </>
    )
}

export default (Alert)
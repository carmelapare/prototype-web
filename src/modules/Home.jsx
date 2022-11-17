import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Report from '../modules/Report'
import Navbar from './NavBar'

const Home = () => {
    const {  getAccessTokenSilently, isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
    const [ reportData, setReportData ] = useState([])

    const parseData = (appData) => {
        let data = []
        appData.forEach((app) => {
           if (app['actions'].length > 0) {
               app['actions'].forEach((action) => {
                   if (action['triggers'].length > 0) {
                        action['triggers'].forEach((trigger) => {
                            data.push({
                                app_id: app.app_id,
                                app_name: app.app_name,
                                app_type : app.app_type,
                                action_name: action.name,
                                trigger_name: trigger.id + ` (${trigger.version})`,
                                app_metadata: app.app_metadata
                            })
                        })
                    }
               })
           } else {
                data.push({
                    app_id: app.app_id,
                    app_name: app.app_name,
                    app_type : app.app_type,
                    action_name: 'None',
                    trigger_name: 'None',
                    app_metadata: app.app_metadata
                })
           }
       })
       return data
    }

    const displayButton = (isAuthenticated) => {
        const title = !isAuthenticated ? 'Login' : 'Logout'
        const handleClick = !isAuthenticated ? loginWithRedirect : logout
        return (
            <button onClick = {handleClick}> 
                {title}
            </button> 
        ) 
    }

    useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently().then(token => {
                fetch(process.env.REACT_APP_API + '/clients', {
                    headers: {
                        Authorization:"Bearer " + token
                    }
                })
                .then (response => response.json())
                .then (json => {
                    let allData = parseData([...json])
                    console.log(allData)
                    setReportData(allData)
                });
            });
        }
    }, [isAuthenticated])

    return (
        <div>
            <Navbar/>
            {isAuthenticated && (<Report data={reportData} />)}           
        </div>
    )
}

export default Home
import React from 'react'
import { createRoutes } from '@/router/index'
import { HashRouter as Router, Link } from 'react-router-dom'
class AppIndex extends React.Component {
    render() {
        return (
            <Router>
                    {createRoutes}
            </Router>
        )
    }
}
export default AppIndex
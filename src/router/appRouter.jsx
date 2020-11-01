import React from 'react'
import { createRoutes } from '@/router/index'
import { HashRouter as Router, Link } from 'react-router-dom'
class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/test">Test</Link>
                        </li>
                        <li>
                            <Link to="/two">Two</Link>
                        </li>
                    </ul>
                    {createRoutes}

                </div>
            </Router>
        )
    }
}
export default AppRouter
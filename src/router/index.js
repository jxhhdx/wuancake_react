import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from '@/view/common/home'

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Form</Link>
                        </li>
                        <li>
                            <Link to="/one">One</Link>
                        </li>
                        <li>
                            <Link to="/two">Two</Link>
                        </li>
                    </ul>
                    <Route path="/" exact component={Home} />
                    <Route path="/one" render={() => <h3>One</h3>} />
                    <Route path="/two" render={() => <h3>Two</h3>} />
                </div>
            </Router>
        )
    }
}
export default AppRouter
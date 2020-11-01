import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { RouteIterationComponent } from '@/router/index'

class Test extends React.Component {
    render() {
        let { number, routes } = this.props

        return (
            <div>
                <Link to="/test/nice">nice</Link>
                <Link to="/test/hello">hello</Link>
                number: {number};
                <br/>
                {routes.map((route, i) => <RouteIterationComponent key={i} {...route} />)}
            </div>
        )
    }
}

const mapStateToProps = (state/*, props*/) => {
    return {
        number: state.test.number
    }
}

export default connect(mapStateToProps)(Test)
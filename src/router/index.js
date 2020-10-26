import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '@/view/common/home'
import Test from '@/view/common/test'

class AppRouter extends React.Component {
    render() {
        return (
            // <Home />
            <BrowserRouter>
                <Route path="/" component={Home} />
                <Route path="/test" component={Test} />
            </BrowserRouter>
        )
    }
}
export default AppRouter
import React from 'react'
// import AppRouter from '@/router/appRouter'
import AppIndex from '../router/appIndex'
import { Provider } from 'react-redux'
import store from '@/redux'

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppIndex />
            </Provider>
        )
    }
}

export default Index
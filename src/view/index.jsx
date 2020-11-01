import React from 'react'
import AppRouter from '@/router/appRouter'
import { Provider } from 'react-redux'
import store from '@/redux'

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}

export default Index
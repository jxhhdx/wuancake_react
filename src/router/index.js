import React from 'react'
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch, useHistory } from 'react-router-dom'
import Home from '../view/common/home'
import Test from '../view/common/test'
import HomePage from '../view/HomePage'

let Hello = ()=><div>hello</div>
let Nice = ()=><div>Nice</div>
const routes = [
    { path: '/', redirect: '/homepage' },
    { path: '/homepage', component: HomePage },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/test',
        component: Test,
        children: [
            {
                path: '/test/hello',
                component: Hello,
            },
            {
                path: '/test/nice',
                component: Nice,
            },
        ]
    },
]

const RouteIterationComponent = route => {
     return <Route  path={route.path}
            render={props => (
                <route.component {...props} routes={route.children}></route.component>
            )}
    />
}

const createRoutes = routes.map((item, index) => {
    if (item.redirect) {
        return <Redirect from={item.path} to={item.redirect} key={index} />
    }
    if (item.component) {
        return <RouteIterationComponent key={index} {...item}/>
    }
})



export { createRoutes, RouteIterationComponent } 





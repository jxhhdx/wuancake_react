import React from 'react'
import ReactDOM from 'react-dom'
import Index from './view/Index'
import Mock from 'mockjs'
import './assets/css/common.less'

Mock.mock('/hello',{num:'999'})
ReactDOM.render(
    <Index />,
    document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'
import Index from './view/Index'
import Mock from 'mockjs'
import './assets/css/common.less'

import ss from './utils/test'
console.log(ss)

Mock.mock('/hello',{num:'999'})
ReactDOM.render(
    <Index />,
    document.getElementById('root')
)
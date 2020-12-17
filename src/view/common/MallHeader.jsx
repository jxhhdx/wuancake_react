import React from 'react'
import { Layout } from 'antd'
import NavTopbar from './NavTopbar'
import NavHeader from './NavHeader'

class MallHeader extends React.Component {

    render() {
        return (
            <div className="header">
                <NavTopbar /> 
                <NavHeader /> 
            </div>
        )
    }

}

export default MallHeader
import React from 'react'
import { Layout } from 'antd';
import { connect } from 'react-redux'
const { Header } = Layout;

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';


class NavHeader extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        let collapsed = !this.state.collapsed
        this.setState({
            collapsed: collapsed,
        });
        
        this.props.dispatch({type: 'collapsed', collapsed})
    };

    render() {
        
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })} 
                <span className="title">后台管理系统</span>
                
            </Header>
        )
    }
}

const mapStateToProps = (state/*, props*/) => {
    return {
        collapsed: state.test.collapsed
    }
}

export default connect(mapStateToProps)(NavHeader)
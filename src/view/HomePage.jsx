import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import NavHeader from './common/NavHeader'
import NavContent from './common/NavContent'
import NavSider from './common/NavSider'


class HomePage extends React.Component {

    render() {
        return (
            <Layout>
                <NavHeader />
                <Layout className="site-layout">
                    <NavSider />
                    <NavContent />
                </Layout>
            </Layout>
        );
    }
    
}

export default HomePage
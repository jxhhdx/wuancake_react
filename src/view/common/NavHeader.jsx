import React from 'react'
import { Input } from 'antd'


class NavHeader extends React.Component {

    render() {
        return (
            <div className="nav-header">
                <div className="container">
                    <div className="header-logo">
                        <a href=""></a>
                    </div>
                    <div className="header-menu">
                        <div className="item-menu">
                            <span>小米手机</span>
                        </div>
                        <div className="item-menu">
                            <span>redmi手机</span>
                        </div>
                        <div className="item-menu">
                            <span>电视</span>
                        </div>
                    </div>
                    <div className="header-search">
                        <div className="wrapper">
                            <input type="text" name="keyword" />
                            <a href=""></a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default NavHeader
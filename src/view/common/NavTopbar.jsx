import React from 'react'

class NavTopbar extends React.Component {

    render() {
        return (
            <div className="nav-topbar">
                <div className="container">
                    <div className="topbar-menu">
                        <a href="">小米商城</a>
                        <a href="">MUI</a>
                        <a href="">云服务</a>
                        <a href="">协议规则</a>
                    </div>
                    <div className="topbar-user">
                        <a href="">admin</a>
                        <a href="">退出</a>
                        <a href="">我的订单</a>
                        <a href="" className="my-cart">
                            <span className="icon-cart"></span>购物车(0)
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default NavTopbar
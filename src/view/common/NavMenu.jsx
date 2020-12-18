import React from 'react'

class NavMenu extends React.Component {
    render() {
        return (
            <div className="nav-menu">
                <ul className="menu-wrap">
                    <li className="menu-item"><a href="">手机 电话卡</a></li>
                    <li className="menu-item"><a href="">电视 盒子</a></li>
                    <li className="menu-item"><a href="">笔记本 平板</a></li>
                    <li className="menu-item"><a href="">家电 插线板</a></li>
                    <li className="menu-item"><a href="">出行 穿戴</a></li>
                    <li className="menu-item"><a href="">智能 路由器</a></li>
                    <li className="menu-item"><a href="">电源 配件</a></li>
                    <li className="menu-item"><a href="">生活 箱包</a></li>
                </ul>
            </div>
            
        )
    }
}

export default NavMenu
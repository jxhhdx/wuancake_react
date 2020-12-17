import React from 'react'

class NavMenu extends React.Component {
    render() {
        return (
            <div class="nav-menu">
                <ul class="menu-wrap">
                    <li class="menu-item"><a href="javascript:;">手机 电话卡</a></li>
                    <li class="menu-item"><a href="javascript:;">电视 盒子</a></li>
                    <li class="menu-item"><a href="javascript:;">笔记本 平板</a></li>
                    <li class="menu-item"><a href="javascript:;">家电 插线板</a></li>
                    <li class="menu-item"><a href="javascript:;">出行 穿戴</a></li>
                    <li class="menu-item"><a href="javascript:;">智能 路由器</a></li>
                    <li class="menu-item"><a href="javascript:;">电源 配件</a></li>
                    <li class="menu-item"><a href="javascript:;">生活 箱包</a></li>
                </ul>
            </div>
        )
    }
}

export default NavMenu
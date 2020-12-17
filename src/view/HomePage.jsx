import React from 'react'
import MallHeader from './common/MallHeader'
import MallContent from './common/MallContent'
import MallFoot from './common/MallFoot'
import "antd/dist/antd.css";
class HomePage extends React.Component {

    render() {
        return (
            <div>
                <MallHeader/>
                <MallContent/>
                <MallFoot/>
            </div>
        )
    }

}

export default HomePage
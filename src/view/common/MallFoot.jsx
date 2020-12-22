import React from 'react'

class MallFoot extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="footer-logo">
                    <img src="/imgs/logo-footer.png" alt=""/>
                    <p>小米商城</p>
                </div>
                <div className="copyright">
                    Copyright ©2019 <span className="domain">mi.futurefe.com</span> All Rights Reserved.
                </div>
            </div>
        )
    }

}

export default MallFoot
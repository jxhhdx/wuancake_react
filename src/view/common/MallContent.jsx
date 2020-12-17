import React from 'react'
import { Carousel } from 'antd'
import NavMenu from './NavMenu'

class MallContent extends React.Component {

    onChange(a, b, c) {
        console.log(a, b, c);
    }
    render() {
        const contentStyle = {
            height: '451px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        return (
            <div className="index">
                <div className="container">
                    <div className="swiper-box">
                        <NavMenu />
                        <Carousel afterChange={this.onChange}>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }

}

export default MallContent
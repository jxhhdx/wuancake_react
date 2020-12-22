import React from 'react'
import { Carousel } from 'antd'
import NavMenu from './NavMenu'
import AdsBox from './AdsBox'
import ProductBox from './ProductBox'
import Service from './Service'
import imgUrl from '../../assets/img/banner-1.png'

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
                        <AdsBox />
                        <div className="banner">
                            <a href="/#/product/30"><img alt="" data-src="/imgs/banner-1.png" src={imgUrl} lazy="loaded" /></a>
                        </div>
                    </div>
                </div>
                <ProductBox />
                <Service />
            </div>
        )
    }

}

export default MallContent
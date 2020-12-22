import React from 'react'
import imgUrl from '../../assets/img/mix-alpha.jpg'

class ProductBox extends React.Component {

    render() {
        return (
            <div className="product-box">
                <div className="container">
                    <h2>手机</h2>
                    <div className="wrapper">
                        <div className="banner-left">
                            <a href="/#/product/35">
                                <img alt="" data-src="/imgs/mix-alpha.jpg" src={imgUrl} lazy="loaded"/>
                            </a>
                        </div>
                        <div className="list-box">
                            <div className="list"></div>
                            <div className="list"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductBox
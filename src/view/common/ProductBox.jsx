import React from 'react'
import imgUrl from '../../assets/img/mix-alpha.jpg'

class ProductBox extends React.Component {

    render() {
        return (
            <div class="product-box">
                <div class="container">
                    <h2>手机</h2>
                    <div class="wrapper">
                        <div class="banner-left">
                            <a href="/#/product/35">
                                <img alt="" data-src="/imgs/mix-alpha.jpg" src={imgUrl} lazy="loaded"/>
                            </a>
                        </div>
                        <div class="list-box">
                            <div class="list"></div>
                            <div class="list"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductBox
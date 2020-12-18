import React from 'react'
import imgUrl from '../../assets/img/ads/ads-1.png'
import imgUrl2 from '../../assets/img/ads/ads-2.jpg'
import imgUrl3 from '../../assets/img/ads/ads-3.png'
import imgUrl4 from '../../assets/img/ads/ads-4.jpg'

class AdsBox extends React.Component {

    render() {
        return (
            <div className="ads-box">
                <a href="/#/product/33"><img alt="" src={imgUrl} lazy="loaded"/></a>
                <a href="/#/product/48"><img alt="" src={imgUrl2} lazy="loaded"/></a>
                <a href="/#/product/45"><img alt="" src={imgUrl3} lazy="loaded"/></a>
                <a href="/#/product/47"><img alt="" src={imgUrl4} lazy="loaded"/></a>
            </div>
        )
    }

}

export default AdsBox
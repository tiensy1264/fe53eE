import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import BTProductList from './BTProductList'

export default class BTContent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-10">
                    <BTCarousel/>
                    <BTProductList/>
                </div>
                <div className="col-2"></div>
            </div>

        )
    }
}

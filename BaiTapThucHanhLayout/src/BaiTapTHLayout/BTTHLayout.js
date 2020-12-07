import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTSlidebar from './BTSlidebar'

export default class BTTHLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <div className="container">
                <div className="row" style={{marginTop:'30px'}}>
                
                    <div className="col-3" >
                        <BTSlidebar/>
                    </div>
                    <div className="col-9">
                        <BTContent/>
                    </div>
                </div>
                </div>
                <BTFooter/>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick = (title) =>{
        // code xu ly click
        //...
        alert ("Hello" + title)
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    // goi ophuong thuc xu ly khi nguoi dung click
                   this.handleClick('cybersoft');
                }}>Click</button>
            </div>
        )
    }
}

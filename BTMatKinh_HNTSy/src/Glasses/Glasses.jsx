import React, { Component } from 'react'
import './css.css'
export default class Glasses extends Component {
        constructor(props){
            super(props);
            this.state = {
                colorChange : "./img/v1.png"
                }
        }
        
        changeShowImg = (e) =>{
            this.setState({
                colorChange: `./img/v${e}.png`
            })
        }
    render() {
        return (
           <div id='body'>            
                <div className='header'>
                    <h3>TRY GLASSES APP ONLINE</h3>
                 </div>
                <div className='container'>
                        <div className="row">
                            <div className="col-6">
                                <div className="item">
                                    <img src="./img/model.jpg" alt=""/>
                                    <img class='imgStyle'src={this.state.colorChange} alt=""/>
                                    <div className="contentItem">   
                                        <h3>Glasses</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                    <div className="item">
                                        <img src="./img/model.jpg" alt=""/>
                                    </div>
                            </div>
                        </div>
                        <div className="selectButton">
                        <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(1)}>
                                    <img src="./img/v1.png" alt=""/>
                                </button>
                            </div>
                            <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(2)}>
                                    <img src="./img/v2.png" alt=""/>
                                </button>
                            </div>
                            <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(3)}>
                                    <img src="./img/v3.png" alt=""/>
                                </button>
                            </div>
                            <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(4)}>
                                    <img src="./img/v4.png" alt=""/>
                                </button>
                            </div>
                            <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(5)}>
                                    <img src="./img/v5.png" alt=""/>
                                </button>
                            </div>
                            <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(6)}>
                                    <img src="./img/v6.png" alt=""/>
                                </button>
                            </div>
                            <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(7)}>
                                    <img src="./img/v7.png" alt=""/>
                                </button>
                            </div>
                            <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(8)}>
                                    <img src="./img/v8.png" alt=""/>
                                </button>
                            </div>
                            <div className="btn-div">
                                <button className="btn-item" onClick={()=>this.changeShowImg(9)}>
                                    <img src="./img/v9.png" alt=""/>
                                </button>
                            </div>                     
                        </div>
                    </div>
           </div>
        )
    }
}

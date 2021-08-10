import React, { Component } from 'react'
import Column from './Column';
import "../App.css"

export class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.obj)
        return (
            <div className="Row">
                <h5>{this.props.Title}</h5>
                <div className="col flex__center">
                    {
                        this.props.given.map((item, index) => (
                            <div key={index}>
                                <Column img={item.img} text={item.text}/>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        )
    }
}

export default Row

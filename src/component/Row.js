import React, { Component } from 'react'
import Column from './Column';
import "../App.css"

export class Row extends Component {

    render() {
        return (
            <div className="Row">
                <h5>{this.props.Title}</h5>
                <div className="col flex__center">
                    {
                        this.props.given.map((item, index) => (
                            <div key={index}>
                                <Column img={item.img} text={item.text} />
                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }
}

export default Row

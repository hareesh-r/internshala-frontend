import React, { Component } from 'react'
import "../App.css"

export class Column extends Component {
    render() {
        return (
            <div className="Column flex__center">
                <img src={this.props.img} alt="" />
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default Column

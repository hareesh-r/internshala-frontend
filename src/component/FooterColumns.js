import React, { Component } from 'react'
import "../App.css"
export class FooterColumns extends Component {
    render() {
        return (
            <div className="FooterColumns">
                {
                    this.props.text.map((item,index) => (
                        <p key={index}>
                            {item}
                        </p>
                    ))
                }
            </div>
        )
    }
}

export default FooterColumns
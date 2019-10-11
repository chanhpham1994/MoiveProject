import React, { Component } from 'react'

export default class AdminContent extends Component {
    render() {
        return (
            <div className='admin--content'>
                {this.props.children}
            </div>
        )
    }
}

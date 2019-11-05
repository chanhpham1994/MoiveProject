import React, { Component } from 'react'

export default class LoadingComponent extends Component {

    //TAO COMPONENT LOADING ĐỂ TÁI SỬ DỤNG NHIỀU LẦN
    render() {
        return (
            <div className="loading-page">
                        <img src={require('../../Assests/images/ngaiheo.png')} alt=""/>
            </div>
        )
    }
}
